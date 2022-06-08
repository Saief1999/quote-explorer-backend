import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { Quote } from './quote.model';

@Injectable()
export class QuoteService {
    constructor(@InjectModel(Quote.name) private quoteModel: Model<Quote & Document>) {}
    
    async getAllQuotes():Promise<Quote[]> {
        return this.quoteModel.find().exec();
    }

    async getQuote():Promise<Quote> {

        const count = await this.quoteModel.count();
        var rand = Math.floor(Math.random() * count);

        return this.quoteModel.findOne().skip(rand).exec();
    }
}
