import { Routes } from '@angular/router';
import { APP_ROUTES } from './app.routes';

// SSR expects `serverRoutes`
export const serverRoutes: Routes = APP_ROUTES;
