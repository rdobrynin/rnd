import {
  DateField,
  ObjectField,
  StringField,
} from '../../../common/decorators/field.decorators';

export class CoinMarketRate {
  @StringField()
  base: string;

  @ObjectField(() => Object)
  results: Record<string, string>;

  @DateField()
  updated: Date;
}
