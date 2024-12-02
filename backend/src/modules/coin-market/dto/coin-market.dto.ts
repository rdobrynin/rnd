import { StringField } from '../../../common/decorators/field.decorators';
import { AbstractDto } from '../../../common/dto/abstract.dto';

export class CoinMarketDto extends AbstractDto {
  @StringField()
  name: string;

  @StringField()
  symbol: string;
}
