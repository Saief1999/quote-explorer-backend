import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { IsNotEmpty } from "class-validator";
import { Document } from "mongoose";

export type QuoteDocument = Quote & Document;

@Schema({ timestamps: false, versionKey: false })
export class Quote {
  _id: string;

  @IsNotEmpty()
  @Prop({ type: mongoose.Schema.Types.String })
  text: string;

  @IsNotEmpty()
  @Prop({ type: mongoose.Schema.Types.String })
  author: string;

  @IsNotEmpty()
  @Prop({ type: mongoose.Schema.Types.String })
  tag: string;
}

export const QuoteSchema =
  SchemaFactory.createForClass(Quote);