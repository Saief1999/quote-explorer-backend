import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.service';
import { Quote, QuoteSchema } from './quote.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Quote.name, schema: QuoteSchema }])],
  controllers: [QuoteController],
  providers: [QuoteService],
})
export class QuoteModule {}
