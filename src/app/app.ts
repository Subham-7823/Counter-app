import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('counter-app');
  count: number = 0

  handelIncrement() {
    this.count = this.count + 1
  }
  handelDecrement() {
    if(this.count>0){
      this.count = this.count - 1
    }
    
  }
  handelReset() {
    this.count = 0
  }
}
