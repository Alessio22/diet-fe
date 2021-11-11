import {Injectable} from '@angular/core';

export interface ConfigModel {
  production?: boolean;
  api?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config: ConfigModel = {}

  constructor() {
  }
}
