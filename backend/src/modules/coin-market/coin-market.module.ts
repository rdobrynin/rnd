import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import {CoinMarketService} from "./coin-market.service";

@Module({
    imports: [
        TerminusModule,
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
    exports: [CoinMarketService]
})
export class CoinMarketModule {}
