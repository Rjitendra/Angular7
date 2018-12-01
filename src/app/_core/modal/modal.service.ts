import { Injectable } from '@angular/core';
import { AlertStatus, AlertBoxType } from '../enum/alertStatus.enum';

@Injectable()
export class ModalService {
    public confirm: (alertType: AlertBoxType, message?: string, title?:
         string, alertStatus?: AlertStatus, okButtonText?: string, displayImage?: boolean) => Promise<boolean>;
   }
