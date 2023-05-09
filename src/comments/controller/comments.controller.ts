import { Body, Controller, Get, Patch, Param, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CommentsService } from '../service/comments.service';
import { CommentCreateDto } from '../dto/comments.create.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiOperation({
    summary: '프로필에 적힌 모든 댓글 가져오기',
  })
  @Get()
  async getAllComments() {
    return this.commentsService.getAllComments();
  }

  @Post(':id')
  // param : 어떤 고양이 게시물에 댓글을 달 것인지
  async createComment(@Param('id') id: string, @Body() body: CommentCreateDto) {
    return this.commentsService.createComment(id, body);
  }

  @ApiOperation({
    summary: '좋아요 수 올리기',
  })
  @Patch(':id')
  async plusLike(@Param('id') id: string) {
    return this.commentsService.plusLike(id);
  }
}
