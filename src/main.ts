import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // --- Konfigurasi CORS Lengkap ---
  app.enableCors({
    origin: [
      'http://localhost:5173', // Izinkan origin frontend development Anda
      // Ganti placeholder ini dengan URL frontend Vercel Anda yang sebenarnya
      'https://final-project-front-end-pi.vercel.app' // <-- URL FRONTEND VERCEL DARI SNIPPET KEDUA
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Metode yang diizinkan
    allowedHeaders: 'Content-Type, Accept, Authorization', // Header yang diizinkan
    credentials: true, // Izinkan pengiriman credentials
  });
  // -----------------------------

  // Konfigurasi Swagger
  const config = new DocumentBuilder()
    .setTitle('Simple Social Media API')
    .addBearerAuth()
    .addSecurityRequirements('bearer')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  
  // Endpoint untuk JSON Swagger
  app.use('/api/swagger-json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(document);
  });

  // Endpoint untuk Swagger UI
  app.use('/api/swagger', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>API Docs</title>
          <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist/swagger-ui.css" />
        </head>
        <body>
          <div id="swagger-ui"></div>
          <script src="https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js"></script>
          <script>
            window.onload = function () {
              SwaggerUIBundle({
                url: '/api/swagger-json',
                dom_id: '#swagger-ui',
              });
            };
          </script>
        </body>
      </html>
    `);
  });

  // Global Pipe untuk Validasi
  app.useGlobalPipes(new ValidationPipe());

  // Jalankan Aplikasi
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
