import { Controller, Get } from "@nestjs/common";
import { Quote } from "./quote.model";
import { QuoteService } from "./quote.service";

@Controller("quotes")
export class QuoteController {

    constructor(private quoteService:QuoteService) {}
    @Get()
    async getAllQuotes():Promise<Quote[]> {
        return this.quoteService.getAllQuotes();
    }

    @Get("/random")
    async getQuote():Promise<Quote> {
        return this.quoteService.getQuote();
    }

}