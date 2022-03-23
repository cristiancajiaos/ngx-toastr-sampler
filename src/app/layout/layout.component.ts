import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  alertTypes = ['success', 'warning', 'error', 'info'];
  easingTypes = ['ease-in', 'ease-out'];
  progressAnimations = ['decreasing', 'increasing'];
  toastPositions = ['toast-top-right', 'toast-bottom-right', 'toast-bottom-left', 'toast-top-left',
    'toast-bottom-full-width', 'toast-top-center', 'toast-bottom-center'];

  alertType = 'success';
  title = 'Título';
  message = 'Mensaje';

  closeButton = false;
  timeOut = 5000;
  extendedTimeOut = 1000;
  disableTimeOut = false;
  easingType = 'ease-in';
  easeTime = 300;
  progressBar = false;
  progressAnimation = 'decreasing';
  toastClass = 'ngx-toastr';
  positionClass = 'toast-top-right';
  titleClass = 'toast-title';
  messageClass = 'toast-message';
  tapToDismiss = false;

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  openAlert(): void {
    let options = {
      closeButton: this.closeButton,
      timeOut: this.timeOut,
      extendedTimeOut: this.extendedTimeOut,
      disableTimeOut: this.disableTimeOut,
      easingType: this.easingType,
      easeTime: this.easeTime,
      progressBar: this.progressBar,
      positionClass: this.positionClass,
      tapToDismiss: this.tapToDismiss
    };

    switch (this.alertType) {
      case 'success': {
        this.toastr.success(this.message, this.title, options);
        break;
      }

      case 'warning': {
        this.toastr.warning(this.message, this.title, options);
        break;
      }

      case 'error': {
        this.toastr.error(this.message, this.title, options);
        break;
      }

      case 'info': {
        this.toastr.info(this.message, this.title, options);
        break;
      }
    }
  }

  resetDefault(): void {
    this.alertType = 'success';
    this.title = 'Título';
    this.message = 'Mensaje';

    this.closeButton = false;
    this.timeOut = 5000;
    this.extendedTimeOut = 1000;
    this.disableTimeOut = false;
    this.easingType = 'ease-in';
    this.easeTime = 300;
    this.progressBar = false;
    this.positionClass = 'toast-top-right';
    this.tapToDismiss = false;
  }
}
