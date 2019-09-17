import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'PustoyStakan';
  showElement = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.showElement = true;
    }, 1000);
  }
}
