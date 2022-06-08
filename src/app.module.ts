import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuoteModule } from './quotes/quote.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER}.c5opi.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
    ),
    QuoteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

