import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';

import { IAppConfig } from '../../config/app-config.model';
import { BaseUrlInterceptor } from './base-url/base-url-interceptor.service';

const baseUrlInterceptorFactory = (config: IAppConfig) => new BaseUrlInterceptor(config);

@NgModule({})
export class InterceptorsModule {
  static forRoot(token: InjectionToken<IAppConfig>, config: IAppConfig): ModuleWithProviders {
    return {
      ngModule: InterceptorsModule,

      providers: [
        { provide: token, useValue: config },
        { provide: HTTP_INTERCEPTORS, useFactory: baseUrlInterceptorFactory, multi: true, deps: [token] }
      ]
    };
  }
}
