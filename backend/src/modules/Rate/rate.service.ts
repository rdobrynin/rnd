import {Inject, Injectable} from '@nestjs/common';
import {CoinMarketService} from "../coin-market/coin-market.service";
import {CoinMarketPayload} from "../coin-market/dto/coin-market.payload";
import {RatePairOptionDto} from "./dto/rate-pair-option.dto";
import {RatePairDto} from "./dto/rate-pair.dto";
import {CoinMarketRate} from "../coin-market/dto/coin-market-rate";
import {plainToClass} from "class-transformer";
import {CACHE_MANAGER} from "@nestjs/cache-manager";
import { Cache } from 'cache-manager';
import {GeneratorProvider} from "../../common/providers/generator.provider";
import {ConfigService} from "@nestjs/config";
import {RateCurrencyDto} from "./dto/rate-currency.dto";
import {RatePairDataDto} from "./dto/rate-pair-data.dto";

@Injectable()
export class RateService {
    constructor(
        private coinMarketService: CoinMarketService,
        private configService: ConfigService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {}

    async getCrypto(): Promise<RateCurrencyDto> {
        return {data: await this.coinMarketService.getCurrencies()};
    }

    async getPairs(pairOptionDto: RatePairOptionDto): Promise<RatePairDataDto> {

       const isPaired: RatePairDto = await this.cacheManager.get(`${pairOptionDto.from}-${pairOptionDto.to}`);

       if (isPaired) {
           const diffMinutes = GeneratorProvider.diffMinutes(new Date(isPaired.updated), new Date());
           if (diffMinutes < this.configService.get<number>('COIN_MARKET_DELAY_MINS')) {
               return {data: Object.assign(isPaired)};
           }
           await this.cacheManager.del(`${pairOptionDto.from}-${pairOptionDto.to}`);
       }

        const coinMarketRate: CoinMarketRate = await this.coinMarketService.getPairRates(pairOptionDto.from, pairOptionDto.to);
        const price =  Object.values(coinMarketRate.results);
        const ratePairDto = plainToClass(RatePairDto, {
            from: coinMarketRate.base,
            to: pairOptionDto.to,
            price: price[0],
            updated: coinMarketRate.updated,
        })

        await this.cacheManager.set(`${pairOptionDto.from}-${pairOptionDto.to}`, ratePairDto);
        return {data: ratePairDto}
    }
}
