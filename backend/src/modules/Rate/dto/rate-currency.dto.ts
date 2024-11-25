import {ObjectField} from "../../../common/decorators/field.decorators";
import {CoinMarketPayload} from "../../coin-market/dto/coin-market.payload";

export class RateCurrencyDto{

    @ObjectField(() => CoinMarketPayload, {isArray: true})
    data: CoinMarketPayload[];
}
