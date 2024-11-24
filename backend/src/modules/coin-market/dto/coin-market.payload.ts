import {NumberField, StringField} from "../../../common/decorators/field.decorators";

export class CoinMarketPayload{
    @NumberField()
    id: number;

    @StringField()
    name: string;

    @StringField()
    symbol: string;

    @StringField()
    slug: string;
}
