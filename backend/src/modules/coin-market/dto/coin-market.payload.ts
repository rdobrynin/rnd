import {StringField} from "../../../common/decorators/field.decorators";

export class CoinMarketPayload{

    @StringField()
    symbol: string;

    @StringField()
    name: string;
}
