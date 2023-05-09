import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from 'src/auth/auth.module';
import { CatsController } from './controller/cats.controller';
import { CatsRepository } from './cats.repository';
import { Cat, CatSchema } from './cats.schema';
import { CatsService } from './service/cats.service';
import { Comments, CommentsSchema } from 'src/comments/comments.schema';

@Module({
  imports: [
    MulterModule.register({
      dest: './upload', // dest == destination, 저장되는 폴더 이름
    }),
    MongooseModule.forFeature([
      { name: Cat.name, schema: CatSchema },
      { name: Comments.name, schema: CommentsSchema },
    ]),
    forwardRef(() => AuthModule),
    // 순환 모듈 문제 발생 방지
  ],
  controllers: [CatsController],
  providers: [CatsService, CatsRepository],
  exports: [CatsService, CatsRepository],
})
export class CatsModule {}
