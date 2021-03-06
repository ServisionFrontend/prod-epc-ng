import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedComponentsModule} from '../../modules/shared-components.module';
import {LegendComponent} from './legend/legend.component';
import {UsageComponent} from './usage.component';
import {UsageRouting} from './usage.routing';

@NgModule({
    imports: [
        CommonModule,
        SharedComponentsModule,
        UsageRouting
    ],
    declarations: [
        LegendComponent,
        UsageComponent
    ]
})
export class UsageModule {
}
