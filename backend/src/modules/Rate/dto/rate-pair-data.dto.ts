import { ObjectField} from "../../../common/decorators/field.decorators";
import {RatePairDto} from "./rate-pair.dto";

export class RatePairDataDto {
    @ObjectField(() => RatePairDto, )
    data: RatePairDto;
}
