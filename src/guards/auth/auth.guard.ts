import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request=context.switchToHttp().getRequest();
    const authHeader=request.headers['authorization'];

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthorizedException('Unauthorized');
    }

    return true;

  }

}
    