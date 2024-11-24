import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Catch, HttpStatus } from '@nestjs/common';
import type { Response } from 'express';
import { STATUS_CODES } from 'http';
import { QueryFailedError } from 'typeorm';

import { GeneratorProvider } from '../providers/generator.provider';

@Catch(QueryFailedError)
export class QueryFailedFilter implements ExceptionFilter {
  constructor(private constraintErrors: Record<string, string>) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const errorMessage =
      this.constraintErrors[
        GeneratorProvider.getMySQLIdxKeyFromSqlMessage(exception.sqlMessage)
      ];

    let status: HttpStatus;

    switch (exception.code) {
      case 'ER_DUP_ENTRY':
      case 'ER_ROW_IS_REFERENCED_2':
      case 'ER_BAD_FIELD_ERROR':
        status = HttpStatus.CONFLICT;
        break;
      default:
        status = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    response.status(status).json({
      statusCode: status,
      error: STATUS_CODES[status],
      message: errorMessage,
    });
  }
}
