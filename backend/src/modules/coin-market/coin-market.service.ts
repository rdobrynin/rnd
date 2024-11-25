import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';
import {CoinMarketPayload} from "./dto/coin-market.payload";
import {CoinMarketEntity} from "./coin-market.entity";
import {plainToClass} from "class-transformer";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CoinMarketRate} from "./dto/coin-market-rate";
import { Transactional } from 'typeorm-transactional';

@Injectable()
export class CoinMarketService {
    constructor(
        @InjectRepository(CoinMarketEntity) private repo: Repository<CoinMarketEntity>,
        private configService: ConfigService,
        private readonly httpService: HttpService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {}


    @Transactional()
    async create(): Promise<void> {
      const coinMarketPayloads: CoinMarketPayload[] =  await this.getCurrencies();

      console.log(coinMarketPayloads);
    }

    async getCurrencies(): Promise<CoinMarketPayload[]> {

        const records: CoinMarketEntity[] = await this.repo.find();

        if (records.length) {
            return records;
        }
        const coinMarketPayloads: CoinMarketPayload[] =  await this.httpService.axiosRef
            .get(
                `${this.configService.get<string>('COIN_MARKER_API_URL')}/crypto/currencies?api_key=${this.configService.get<string>('COIN_MARKER_API_TOKEN')}`,
            )
            .then((res) => {
                let entries = Object.entries(res.data.currencies);
                const coinMarketsData: CoinMarketPayload[] = [];
                entries.map( ([key, val]) => {
                    const coinMarketPayload: CoinMarketPayload = {
                        name: String(val),
                        symbol: key,
                    }
                    coinMarketsData.push(coinMarketPayload);
                });
                return coinMarketsData;
            })
            .catch((error) => {
                throw new Error(
                    `${error?.message} : ${JSON.stringify(error?.response?.data)}`,
                );
            });

        const entities: CoinMarketEntity[] = [];

        for (const coin of coinMarketPayloads) {
            const entity = plainToClass(CoinMarketEntity, {
                ...coin
            });

            entities.push(entity);
        }

        await this.repo.save(entities);

        return coinMarketPayloads;
    }

    async getPairRates(from: string, to: string): Promise<CoinMarketRate> {

        return await this.httpService.axiosRef
            .get(
                `${this.configService.get<string>('COIN_MARKER_API_URL')}/fetch-multi?from=${from}&to=${to}&api_key=${this.configService.get<string>('COIN_MARKER_API_TOKEN')}`,
            )
            .then((res) => res.data)
            .catch((error) => {
                throw new Error(
                    `${error?.message} : ${JSON.stringify(error?.response?.data)}`,
                );
            });
    }
}
