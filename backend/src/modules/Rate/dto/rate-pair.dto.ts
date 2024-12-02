import {
  DateField,
  NumberField,
  StringField,
} from '../../../common/decorators/field.decorators';

export class RatePairDto {
  @StringField()
  from: string;

  @StringField()
  to: string;

  @NumberField()
  price: number;

  @DateField()
  updated: Date;
}
