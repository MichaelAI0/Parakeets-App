import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tweet-modal',
  templateUrl: './tweet-modal.component.html',
  styleUrls: ['./tweet-modal.component.css'],
})
export class TweetModalComponent {
  isTabMenuOpen = false;
  openTabMenu() {
    this.isTabMenuOpen = !this.isTabMenuOpen;
  }
}
