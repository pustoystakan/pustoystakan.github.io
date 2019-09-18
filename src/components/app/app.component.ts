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
    this.divScrollElement.nativeElement.scrollLeft += -event.wheelDelta;
    event.preventDefault();
  }
}
