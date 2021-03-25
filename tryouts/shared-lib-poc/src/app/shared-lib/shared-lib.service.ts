import { Inject, Injectable } from "@angular/core";
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from "@angular/router";
import { ModuleConfigService } from "./shared-lib.module";
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SharedLibService {
    constructor(private router: Router, @Inject(ModuleConfigService) private config) {
        console.log(config);
        this.router.events
            .pipe(
                filter(
                    event =>
                        event instanceof NavigationStart ||
                        event instanceof NavigationEnd ||
                        event instanceof NavigationCancel ||
                        event instanceof NavigationError
                )
            )
            .subscribe(event => {
                console.log(event);
            });
    }
}
