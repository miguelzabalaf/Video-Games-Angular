import { AfterContentChecked, Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked {

  activeRoute: string;

  constructor(private router: Router) {
  }

  ngAfterContentChecked() {
    const route = this.router.url.split('/')[1]
    this.activeRoute = route;
  }

}
