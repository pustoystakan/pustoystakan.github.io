import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  showElement = false;

  @ViewChild('divScrollElement', {static: false}) divScrollElement: ElementRef;

  constructor() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  onMouseWheel(event) {
    if (event.deltaX !== 0 && event.deltaY === 0) {
      return;
    }

    let delta;
    if (event.wheelDelta !== undefined) {
      delta = -event.wheelDelta;
    } else {
      if (event.deltaX) {
        return;
      }

      delta = event.deltaY > 0 ? 70 : -70;
    }

    this.divScrollElement.nativeElement.scrollLeft += delta;
    event.preventDefault();
  }
}
