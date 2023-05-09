import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    console.log('[CurrentUser] :', request.user);
    return request.user;
    //return request.user.readOnlyData 일케 해도 된다
  },
);
