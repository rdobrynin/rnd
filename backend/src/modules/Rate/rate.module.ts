
import {forwardRef, Module} from '@nestjs/common';

import {RateService} from "./rate.service";
import {CoinMarketModule} from "../coin-market/coin-market.module";
import {RateController} from "./rate.controller";

@Module({
    imports: [
        forwardRef(() => CoinMarketModule),
    ],
    controllers: [RateController],
    providers: [RateService],
    exports: [RateService]
})
export class RateModule {}
