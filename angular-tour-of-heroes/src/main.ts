import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/*main.ts is referenced in angular.json*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
