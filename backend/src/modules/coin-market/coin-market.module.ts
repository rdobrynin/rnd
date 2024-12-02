import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoinMarketEntity } from './coin-market.entity';
import { CoinMarketService } from './coin-market.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CoinMarketEntity]),
    HttpModule.registerAsync({
      useFactory: () => ({
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'content-type': 'application/json',
        },
      }),
    }),
  ],
  controllers: [],
  providers: [CoinMarketService],
  exports: [CoinMarketService],
})
export class CoinMarketModule {}
