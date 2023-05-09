import { Comments } from '../comments.schema';
import { PickType } from '@nestjs/swagger';

export class CommentCreateDto extends PickType(Comments, [
  'author',
  'contents',
] as const) {}
