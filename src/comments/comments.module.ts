import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from 'src/cats/cats.module';
import { Comments, CommentsSchema } from './comments.schema';
import { CommentsController } from './controller/comments.controller';
import { CommentsService } from './service/comments.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      // mongoose model 활성화
      {
        name: Comments.name,
        schema: CommentsSchema,
      },
    ]),
    CatsModule,
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
