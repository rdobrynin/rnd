import type { IAbstractEntity } from '../../../common/entites/abstract.entity';
import type { CoinMarketDto } from '../dto/coin-market.dto';

export interface ICoinMarketEntity extends IAbstractEntity<CoinMarketDto> {
  slug: string;
  name: string;
}
