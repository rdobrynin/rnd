/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */

import { compact, map } from 'lodash';
import { Brackets, QueryBuilder } from 'typeorm';

import type { AbstractDto } from './dto/abstract.dto';
import type { AbstractEntity } from './entites/abstract.entity';

export type Optional<T> = T | undefined;
export type Nullable<T> = T | null;
export type Plain<T> = T;

export type Constructor<T, Arguments extends unknown[] = unknown[]> = new (
  ...arguments_: Arguments
) => T;

declare global {
  interface Array<T> {
    toDtos<Dto extends AbstractDto>(this: T[], options?: any): Dto[];
  }
}

declare module 'typeorm' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface QueryBuilder<Entity> {
    searchByString(q: string, columnNames: string[]): this;
  }
}

Array.prototype.toDtos = function <
  Entity extends AbstractEntity<Dto>,
  Dto extends AbstractDto,
>(options?: any): Dto[] {
  return compact(
    map<Entity, Dto>(this, (item) => item.toDto(options as never)),
  );
};

QueryBuilder.prototype.searchByString = function (q, columnNames) {
  if (!q) {
    return this;
  }

  this.where(
    new Brackets((qb) => {
      for (const item of columnNames) {
        qb.orWhere(`${item} LIKE :q`);
      }
    }),
  );

  this.setParameter('q', `%${q}%`);

  return this;
};
