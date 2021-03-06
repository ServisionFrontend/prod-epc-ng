import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UsageComponent} from './usage.component';

const routes: Routes = [{
    path: '',
    component: UsageComponent
}];

export const UsageRouting: ModuleWithProviders = RouterModule.forChild(routes);
