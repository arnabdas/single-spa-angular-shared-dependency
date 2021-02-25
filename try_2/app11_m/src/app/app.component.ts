import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app11-root',
  template: `
    <div class="root">
      <h1>{{title}}</h1>
      <div>Angular {{ ngVersion.full }}</div>
      <div>
        [<a routerLink="app11_m">App11_m Home</a>]
        [<a routerLink="app11">App11 Home</a>]
        [<a routerLink="app11_1/hello">Hello</a>]
        [<a routerLink="app11_1/lazy">Lazy</a>]
      </div>

      <router-outlet></router-outlet>
    </div>
  `,
  styles: [ `
    .root {
      border: 1px solid red;
      padding: 1em;
    }
    router-outlet {
      margin-top: 0.5em;
    }
  ` ],
})
export class AppComponent {
  title = 'app11_m';
  ngVersion = VERSION;
}
