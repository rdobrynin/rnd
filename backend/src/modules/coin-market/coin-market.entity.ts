import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToMany,
    ManyToOne,
} from 'typeorm';

import { UseDto } from '../../common/decorators/use-dto.decorators';
import {CoinMarketDto} from "./dto/coin-market.dto";
import { AbstractEntity } from '../../common/entites/abstract.entity';

@Entity()
@UseDto(CoinMarketDto)
export class CoinMarketEntity extends AbstractEntity<CoinMarketDto> {
    @Column()
    name: string;

    @Column()
    symbol: string;

    @Column()
    slug: string;
}
