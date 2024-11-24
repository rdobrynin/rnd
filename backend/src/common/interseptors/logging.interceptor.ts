import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  private static logIndex = 'logs';

  constructor() {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;
    const body = request.body;
    const now = Date.now();

    return next.handle().pipe(
      tap((response) => {
        const responseTime = Date.now() - now;
        const log: ILogData = {
          message: 'Request handled',
          method,
          url,
          body,
          response,
          responseTime,
          statusCode: context.switchToHttp().getResponse().statusCode,
        };
      }),
    );
  }
}

export interface ILogData {
  message: string;
  method: string;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: any;
  responseTime: number;
  statusCode: number;
}
