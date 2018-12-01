import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '../pipe/currency.pipe ';
import { CurrencyFormatterDirective } from './number.directive';
import { PhoneFormatPipe } from '../pipe/phoneno-format.pipe';
import { SafePipe } from '../pipe/sanitize.pipe';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from './ngb-date-fr-parser-formatter';
// import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: 'left',
    allowNegative: false,
    decimal: '.',
    precision: 2,
    prefix: '',
    suffix: '',
    thousands: ','
};
@NgModule({
    imports: [CommonModule,
        CurrencyMaskModule
    ],
    declarations:
        [
            CurrencyPipe,
            CurrencyFormatterDirective,
            PhoneFormatPipe,
            SafePipe
        ],
    exports:
        [
            CurrencyFormatterDirective,
            CurrencyPipe,
            PhoneFormatPipe,
            SafePipe,
            CurrencyMaskModule

        ],
    providers: [
        CurrencyPipe,
        PhoneFormatPipe, {
            provide: NgbDateParserFormatter,
            useClass: NgbDateFRParserFormatter
        }, { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
    ]
})
export class DirectiveModule { }