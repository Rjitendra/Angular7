import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalComponent, ModalService } from './modal/index';
import { EmitService } from './emit/emit.service';
import {
  ShareDataService,
  SessionService,
  SpinnerComponent,
  SpinnerService
} from '.';
import { NgSlimScrollModule } from './slimscroll/module/ngx-slimscroll.module';
import { SLIMSCROLL_DEFAULTS } from './slimscroll/classes/slimscroll-options.class';
import { HttpRequestConstants } from './provider/index';
import { ExceptionService } from './exception/exception.service';
import { QspCommonService } from './services/qspCommon.service';
import { UtilityService } from './utilitiy/utility.service';

@NgModule({
  imports: [CommonModule,
    RouterModule,
    NgSlimScrollModule],
  declarations: [
    ModalComponent,
    SpinnerComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
   ModalComponent,
    NgSlimScrollModule,
    SpinnerComponent
  ],
  providers: [
    ExceptionService,
    ModalService,
    EmitService,
    ShareDataService,
    HttpRequestConstants,
    SpinnerService,
    QspCommonService,
    UtilityService,
   SessionService,
    {
      provide: SLIMSCROLL_DEFAULTS,
      useValue: {
        alwaysVisible: true
      }
    },
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
      ]
    };
  }
}
