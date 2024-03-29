import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('MI API DOCUMENTATION')
    .setDescription('Pensado para la segunda entrega de desarrollo movil')
    .setVersion('1.0')
    .addTag('nombre')
    .addTag('price')
    .addTag('description')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(3000);
}
bootstrap();
