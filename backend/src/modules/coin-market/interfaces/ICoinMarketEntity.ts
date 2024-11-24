import type { IAbstractEntity } from '../../../common/entites/abstract.entity';
import {CoinMarketDto} from "../dto/coin-market.dto";

export interface ICoinMarketEntity extends IAbstractEntity<CoinMarketDto> {
    name: string;

    symbol: string;

    slug: string;
}
