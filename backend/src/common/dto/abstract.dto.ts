import {IsDate, IsNumber} from 'class-validator';

import { IAbstractEntity } from '../entites/abstract.entity';

export class AbstractDto {
  @IsNumber()
  id: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  constructor(entity: IAbstractEntity<AbstractDto>) {
    if (!entity) {
      return;
    }

    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }
}
