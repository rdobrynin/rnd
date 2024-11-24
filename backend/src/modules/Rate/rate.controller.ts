
import { Controller, Get } from '@nestjs/common';

import {RateService} from "./rate.service";
import {ApiTags} from "@nestjs/swagger";
import {CoinMarketPayload} from "../coin-market/dto/coin-market.payload";

@ApiTags('Rates')
@Controller('rate')
export class RateController {
    constructor(
        private service: RateService,
    ) {}

    @Get('crypto')
    async crypto(): Promise<CoinMarketPayload[]> {
        return this.service.getCrypto();
    }


    @Get('pairs')
    async rates(): Promise<void> {
        return this.service.getPairs();
    }
}
