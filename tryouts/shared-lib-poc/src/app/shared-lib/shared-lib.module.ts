import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLibService } from './shared-lib.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedLibHttpInterceptor } from './shared-lib.interceptor';

interface ModuleConfig {
  names: string[]
}

export const ModuleConfigService = new InjectionToken<ModuleConfig>('ModuleConfig');

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedLibModule {
  static forRoot(config: ModuleConfig): ModuleWithProviders<SharedLibModule> {
    return {
      ngModule: SharedLibModule,
      providers: [
        SharedLibService,
        {provide: HTTP_INTERCEPTORS, useClass: SharedLibHttpInterceptor, multi: true},
        {
          provide: ModuleConfigService,
          useValue: config
        }
      ]
    };
  }
}
