import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OrderHistoryComponent} from './order-history.component';

const routes: Routes = [{
  path: '',
  component: OrderHistoryComponent
}];

export const OrderHistoryRouting: ModuleWithProviders = RouterModule.forChild(routes);
