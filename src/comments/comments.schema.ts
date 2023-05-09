import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { Types, Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Comments extends Document {
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'cats',
  })
  @IsNotEmpty()
  author: Types.ObjectId;

  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  contents: string;

  @Prop({
    default: 0,
  })
  @IsPositive()
  likeCount: number;

  @ApiProperty({
    description: '작성 대상',
  })
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'cats',
  })
  @IsNotEmpty()
  info: Types.ObjectId; // 누가 누구에게
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);
