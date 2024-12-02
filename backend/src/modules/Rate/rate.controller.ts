import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { CoinMarketPayload } from '../coin-market/dto/coin-market.payload';
import { RatePairDto } from './dto/rate-pair.dto';
import { RatePairOptionDto } from './dto/rate-pair-option.dto';
import { RateService } from './rate.service';

@ApiTags('Rates')
@Controller('rate')
export class RateController {
  constructor(private service: RateService) {}

  @ApiOkResponse({
    type: CoinMarketPayload,
    isArray: true,
    description: 'get list of crypto',
  })
  @Get('crypto')
  async getCrypto(): Promise<CoinMarketPayload[]> {
    return this.service.getCrypto();
  }

  @ApiOkResponse({
    type: RatePairDto,
    description: 'get current price from pair',
  })
  @Get('pairs')
  async getPairs(
    @Query() ratePairOptionDto: RatePairOptionDto,
  ): Promise<RatePairDto> {
    return this.service.getPairs(ratePairOptionDto);
  }
}
