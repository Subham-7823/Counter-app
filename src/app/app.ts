import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('counter-app');
  count: number = 0;

  // Online audio sources
  incrementSound = new Audio('https://www.myinstants.com/media/sounds/mouse-click.mp3');
  decrementSound = new Audio('https://www.myinstants.com/media/sounds/click_x.wav');
  resetSound = new Audio('https://www.myinstants.com/media/sounds/arcade-retro.mp3');

  constructor() {
    this.incrementSound.load();
    this.decrementSound.load();
    this.resetSound.load();
  }

  handelIncrement() {
    this.count++;
    this.playSound(this.incrementSound);
  }

  handelDecrement() {
    if (this.count > 0) {
      this.count--;
      this.playSound(this.decrementSound);
    }
  }

  handelReset() {
    this.count = 0;
    this.playSound(this.resetSound);
  }

  playSound(sound: HTMLAudioElement) {
    sound.currentTime = 0;
    sound.play().catch(err => {
      console.error('Audio playback failed:', err);
    });
  }
}
