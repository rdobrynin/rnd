import { StringField } from '../../../common/decorators/field.decorators';

export class RatePairOptionDto {
    @StringField()
    from: string;

    @StringField()
    to: string;
}
