import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IAppConfig, APP_CONFIG } from '../../../config/app-config.model';

@Injectable({ providedIn: 'root' })
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor(@Inject(APP_CONFIG) private readonly config: IAppConfig) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith('/')) {
      req = req.clone({ url: this.config.baseUrl + req.url });
    }

    return next.handle(req);
  }
}
