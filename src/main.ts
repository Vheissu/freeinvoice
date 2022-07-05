import Aurelia, { StyleConfiguration } from 'aurelia';
import { RouterConfiguration } from '@aurelia/router';
import { MyApp } from './my-app';

import shared from './shared.css';
import bootstrapCss from 'bootstrap/dist/css/bootstrap.css';

Aurelia
  .register(StyleConfiguration.shadowDOM({
    sharedStyles: [bootstrapCss, shared]
  }))
  .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
