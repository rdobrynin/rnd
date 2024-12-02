import { Column, Entity } from 'typeorm';

import { UseDto } from '../../common/decorators/use-dto.decorators';
import { AbstractEntity } from '../../common/entites/abstract.entity';
import { CoinMarketDto } from './dto/coin-market.dto';

@Entity()
@UseDto(CoinMarketDto)
export class CoinMarketEntity extends AbstractEntity<CoinMarketDto> {
  @Column()
  name: string;

  @Column()
  symbol: string;
}
