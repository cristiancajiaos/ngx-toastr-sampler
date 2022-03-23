import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  alertTypes = ['success', 'warning', 'error', 'info'];

  alertType = 'success';
  title = 'Título';
  message = 'Mensaje';

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

  }

  openAlert(): void {
    switch (this.alertType) {
      case 'success': {
        this.toastr.success(this.message, this.title);
        break;
      }

      case 'warning': {
        this.toastr.warning(this.message, this.title);
        break;
      }

      case 'error': {
        this.toastr.error(this.message, this.title);
        break;
      }

      case 'info': {
        this.toastr.info(this.message, this.title);
        break;
      }
    }

  }


}
