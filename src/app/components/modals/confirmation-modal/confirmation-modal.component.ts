import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-confirmationModal',
  templateUrl: 'confimation-modal.component.html',
})
export class ConfirmationModalComponent {
  modalRef: NgbModalRef | any;

  constructor(
    private modalService: NgbModal,
    private authservice: HomeComponent
  ) {}

  openModal(content: any) {
    this.modalRef = this.modalService.open(content, { centered: true });
  }

  confirmSignOut(content: any) {
    this.openModal(content);
  }

  onSignOut() {
    this.authservice.confirmSignOut;
  }
}
