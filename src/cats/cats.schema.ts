import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Cat extends Document {
  @ApiProperty({
    example: 'tset@naver.com',
    description: 'email',
    required: true,
  })
  /**
   * Prop에서 required를 true로 설정한 상태라면, DTO에서 validatoin exceptiond이 발생해도
   * DB에 저장은 됨
   * */
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'red',
    description: 'name',
    required: true,
  })
  @Prop()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '12345',
    description: 'password',
    required: true,
  })
  @Prop()
  @IsString()
  @IsNotEmpty()
  password: string;

  @Prop()
  @IsString()
  imgUrl: string;

  @Prop()
  @IsString()
  forTest: string;

  readonly readOnlyData: {
    id: string;
    email: string;
    name: string;
  };
}

export const CatSchema = SchemaFactory.createForClass(Cat);
/**
 *  when you access the readOnlyData property on a Cat model,
 * Mongoose will invoke the get function, which will generate an object with the id,
 * email, and name properties from the Cat document.
 * This object is then returned as the value of the readOnlyData property.
 */

CatSchema.virtual('readOnlyData').get(function (this: Cat) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
    imgUrl: this.imgUrl,
    forTest: this.forTest,
  };
});
