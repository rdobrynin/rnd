
import {Controller, Get, Query} from '@nestjs/common';

import {RateService} from "./rate.service";
import {ApiOkResponse, ApiTags} from "@nestjs/swagger";
import {CoinMarketPayload} from "../coin-market/dto/coin-market.payload";
import {RatePairOptionDto} from "./dto/rate-pair-option.dto";
import {RatePairDto} from "./dto/rate-pair.dto";
import {RateCurrencyDto} from "./dto/rate-currency.dto";
import {RatePairDataDto} from "./dto/rate-pair-data.dto";

@ApiTags('Rates')
@Controller('rate')
export class RateController {
    constructor(
        private service: RateService,
    ) {}

    @ApiOkResponse({
        type: RateCurrencyDto,
        description: 'get list of crypto',
    })
    @Get('crypto')
    async getCrypto(): Promise<RateCurrencyDto> {
        return this.service.getCrypto();
    }

    @ApiOkResponse({
        type: RatePairDataDto,
        description: 'get current price from pair',
    })
    @Get('pairs')
    async getPairs(
        @Query() ratePairOptionDto: RatePairOptionDto,
    ): Promise<RatePairDataDto> {
        return this.service.getPairs(ratePairOptionDto);
    }
}
