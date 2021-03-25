import { Component } from '@angular/core';
import { SharedLibService } from './shared-lib/shared-lib.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shared-lib-poc';

  constructor(private sharedLibService: SharedLibService) {
    
  }
}
