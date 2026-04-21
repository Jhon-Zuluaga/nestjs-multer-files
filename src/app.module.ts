import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import {ServeStaticModule} from '@nestjs/serve-static'
import { join } from 'path';

/**
 * Módulo principal de la aplicación
 */

@Module({ 
  imports: [
    // Configuracion multer globalmente: Los archivos se guardan en la carpeta /uploads
    MulterModule.register({
      dest: './uploads',
    }),

    // Sirve los archivos de ./uploads como estaticos
    // Accesibles desde: http://localhost:3000/nombre-archivo.jpg
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
