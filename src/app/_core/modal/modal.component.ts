import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';
import { AlertStatus, AlertBoxType } from '../enum/alertStatus.enum';

@Component({
    selector: 'modal-confirm',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
    private _defaults = {
        confirmTitle: 'Confirmation',
        confirmMessage: 'Do you want to cancel your changes?',
        noText: 'CANCEL',
        notificationTitle: 'Notification',
        notificationMessage: '',
        okText: 'Ok',
    };

    title: string;
    message: string;
    yesText: string;
    noText: string;
    okText: string;
    isConfirmPopup = false;
    isNotificationPopup = false;
    displayImage = false;
    negativeOnClick: (e: any) => void;
    positiveOnClick: (e: any) => void;

    private _modalElement: any;
    private _alertModle: any;
    private _noButton: any;
    private _okButton: any;
    private _alertNoButton: any;
    private _alertOkButton: any;
    private _exclamatoryIcon: any;
    alertStatus: string;
    alertType: AlertBoxType;
    alertTypeId: number;

    constructor(modalService: ModalService) {
        modalService.confirm = this.confirm.bind(this);
    }

    ngOnInit() {
      this._modalElement = document.getElementById('ModalPopup');
      this._alertModle = document.getElementById('alert');
      this._noButton = document.getElementById('noButton');
      this._okButton = document.getElementById('okButton');
      this._alertNoButton = document.getElementById('alertNoButton');
      this._alertOkButton = document.getElementById('alertOkButton');
      this._exclamatoryIcon = document.getElementById('exclamatoryIcon');
    }

    findControls() {
      this._modalElement = document.getElementById('ModalPopup');
      this._alertModle = document.getElementById('alert');
      this._noButton = document.getElementById('noButton');
      this._okButton = document.getElementById('okButton');
      this._alertNoButton = document.getElementById('alertNoButton');
      this._alertOkButton = document.getElementById('alertOkButton');
      this._exclamatoryIcon = document.getElementById('exclamatoryIcon');
    }

    confirm(alertType: AlertBoxType,
            message = this._defaults.confirmMessage,
            title = this._defaults.confirmTitle,
            alertStatus: AlertStatus,
            okButtonText,
            displayImage ) {

        this.title = title;
        this.message = message;
        this.noText = this._defaults.noText;
        this.alertType =  alertType as AlertBoxType;
        this.alertTypeId = this.alertType;
        this.alertStatus = AlertStatus[alertStatus];
        this.displayImage = displayImage;
        this.findControls();
        if (okButtonText !== '') {
            this.okText = okButtonText ;
          } else {
            this.okText = this._defaults.okText ;
          }

            const promise = new Promise<boolean>((resolve, reject) => {
            this.negativeOnClick = (e: any) => resolve(false);
            this.positiveOnClick = (e: any) => resolve(true);
            this._show();
            if (alertType === AlertBoxType.alertBoxwithButtons || alertType === AlertBoxType.confirmBox ) {
              this.showButtons();
            } else {
              this.hideButtons();
            }

            if (this.displayImage) {
              $(this._exclamatoryIcon).show();
            } else {
              $(this._exclamatoryIcon).hide();
            }
        });

        return promise;
    }

    private showButtons() {
        $(this._noButton).show();
        $(this._okButton).show();
        $(this._exclamatoryIcon).hide();
        $(this._alertNoButton).show();
        $(this._alertOkButton).show();
    }

    private hideButtons() {
      $(this._noButton).hide();
      $(this._okButton).hide();
      $(this._alertNoButton).hide();
      $(this._alertOkButton).hide();
    }

    private _show() {
      if (this.alertType === AlertBoxType.confirmBox) {
        if (!this._modalElement || !this._noButton ) {
          return;
        }
      } else {
        if (!this._alertModle || !this._alertNoButton ) {
          return;
        }
      }

      if (this.alertType === AlertBoxType.confirmBox) {
        this._modalElement.style.display = 'none';

        this._noButton.onclick = ((e: any) => {
            e.preventDefault();
            if (!this.negativeOnClick(e)) {
              this._hideDialog();
            }
        });

        this._okButton.onclick = ((e: any) => {
            e.preventDefault();
            if (!this.positiveOnClick(e)) {
              this._hideDialog();
            }
        });

        this._modalElement.style.display = 'block';
      } else {
        this._alertModle.style.display = 'none';

        this._alertNoButton.onclick = ((e: any) => {
            e.preventDefault();
            if (!this.negativeOnClick(e)) {
              this._hideDialog();
            }
        });

        this._alertOkButton.onclick = ((e: any) => {
            e.preventDefault();
            if (!this.positiveOnClick(e)) {
              this._hideDialog();
            }
        });

        this._alertModle.style.display = 'block';
      }
    }

    _hideDialog() {
        document.onkeyup = null;
        if (this.alertType === AlertBoxType.confirmBox) {
            this._modalElement.style.display = 'none';
        } else {
            this._alertModle.style.display = 'none';
        }
    }
}
