import { IsDate, IsUUID } from 'class-validator';

import { IAbstractEntity } from '../entites/abstract.entity';

export class AbstractDto {
  @IsUUID()
  id: string;

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
