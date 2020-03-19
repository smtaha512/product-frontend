import { IAppConfig } from './app-config.model';

import { environment } from '../../environments/environment';

export const AppConfig: IAppConfig = {
  baseUrl: environment.baseUrl
};
