import { forwardRef, Module } from '@nestjs/common';

import { CoinMarketModule } from '../coin-market/coin-market.module';
import { RateController } from './rate.controller';
import { RateService } from './rate.service';

@Module({
  imports: [forwardRef(() => CoinMarketModule)],
  controllers: [RateController],
  providers: [RateService],
  exports: [RateService],
})
export class RateModule {}
