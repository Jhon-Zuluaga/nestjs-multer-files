import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import { Multer } from 'multer'; // Necesario para que typscpt recoznoca express

/**
 * Controlador para subida de archivos
 * Ruta base: /files
 */

@Controller('files')
export class AppController {
  
  // Post /files/upload - Recibe un archivo del form-data en el campo file(postman)
  @Post('upload')

  // Intercepta y procesa el archivo con Multer
  @UseInterceptors(FileInterceptor('file')) 
  // Extrae el archivo del request
  uploadFile(@UploadedFile() file: Express.Multer.File){
    // file contiene: originalmente, mimetype, size, buffer etc..
    console.log(file);
    return {
      Mesasge: 'File uploaded successfully',
    };
  }
}

// Install

// npm run start:dev
// npm i --save @nestjs/serve-static
// npm i @nestjs/platform-express

// POST: http://localhost:3000/files/upload?file
// form-data, file value: (upload image) send

