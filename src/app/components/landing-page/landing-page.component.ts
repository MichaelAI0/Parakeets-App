import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  playLogoSound() {
    const audioElement = new Audio('../../../assets/sounds/parakeetSounds.mp3');
    audioElement.currentTime = 0;
    audioElement.play();

    // Stop the audio after 2 seconds
    setTimeout(() => {
      audioElement.pause();
    }, 4500);
  }
}
