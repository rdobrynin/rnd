import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import {CoinMarketPayload} from "./dto/coin-market.payload";

@Injectable()
export class CoinMarketService {
    constructor(
        private configService: ConfigService,
        private readonly httpService: HttpService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {}


    async create(): Promise<void> {
      const coinMarketPayloads: CoinMarketPayload[] =  await this.getData();

      console.log(coinMarketPayloads);
    }

    async getData(): Promise<CoinMarketPayload[]> {
        return this.httpService.axiosRef
            .get(
                `${this.configService.get<string>('COIN_MARKER_API_URL')}/v1/cryptocurrency/map?symbol=TON,USDT`,
                {
                    headers: {
                        'X-CMC_PRO_API_KEY': `${this.configService.get<string>('COIN_MARKER_API_TOKEN')}`,
                    },
                },
            )
            .then((res) => res.data.data)
            .catch((error) => {
                throw new Error(
                    `${error?.message} : ${JSON.stringify(error?.response?.data)}`,
                );
            });
    }
}
