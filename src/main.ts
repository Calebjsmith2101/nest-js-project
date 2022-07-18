import { Controller, Get, Module } from '@nestjs/common';

import { NestFactory } from '@nestjs/core';

//Create one controller with one route handler
@Controller()
class AppController {
    @Get()
    getRootRoute() {
        return 'hi there!';
    }
}
//Create module and tell it aboput the controller we have created
@Module({
    controllers: [AppController]
})
class AppModule {}

//Difine and invocoke function. It will create an instance of our app and listen for traffic.
async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    await app.listen(3000);
}
bootstrap();