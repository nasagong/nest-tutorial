import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  saySomething(): string {
    return 'This is test';
  }
}
