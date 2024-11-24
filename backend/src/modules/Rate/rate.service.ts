import { Inject, Injectable } from '@nestjs/common';
import {CoinMarketService} from "../coin-market/coin-market.service";
import {CoinMarketPayload} from "../coin-market/dto/coin-market.payload";

@Injectable()
export class RateService {
    constructor(
        private coinMarketService: CoinMarketService,
    ) {}


    async getCrypto(): Promise<CoinMarketPayload[]> {
        return  await this.coinMarketService.getData();
    }

    async getPairs(): Promise<void> {

    }
}
