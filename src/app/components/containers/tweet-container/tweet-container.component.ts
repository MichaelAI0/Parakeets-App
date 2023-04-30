import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TweetModalComponent } from '../../modals/tweet-modal/tweet-modal.component';

@Component({
  selector: 'app-tweet-container',
  templateUrl: './tweet-container.component.html',
  styleUrls: ['./tweet-container.component.css'],
})
export class TweetContainerComponent {
  @Input() tweets: Tweet[] = [];

  constructor(private modalService: NgbModal) {}

  openTweetModal(tweet: Tweet) {}
}
