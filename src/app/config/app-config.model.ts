import { InjectionToken } from '@angular/core';

export interface IAppConfig {
  baseUrl: string;
}

export const APP_CONFIG = new InjectionToken<IAppConfig>('APP_CONFIG');
