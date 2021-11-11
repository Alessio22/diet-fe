import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';

export namespace ConfigActions {
  export class Init {
    static readonly type = '[Config] Init';

    constructor(public config: ConfigStateModel) {
    }
  }
}

export interface ConfigStateModel {
  production?: boolean;
  api?: string;
}

@State<ConfigStateModel>({
  name: 'config',
  defaults: {
    production: false,
    api: ""
  }
})
@Injectable()
export class ConfigState {

  @Selector()
  static api(state: ConfigStateModel): string | undefined {
    return state.api;
  }

  @Action(ConfigActions.Init)
  init(ctx: StateContext<ConfigStateModel>, action: ConfigActions.Init) {
    ctx.setState(action.config)
  }
}
