import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxVirtualJoystickComponent } from './ngx-virtual-joystick.component';
import { StickComponent } from './stick/stick.component';

@NgModule({
    declarations: [
        NgxVirtualJoystickComponent,
        StickComponent
    ],
    imports     : [
        CommonModule,
        FormsModule
    ],
    exports     : [
        NgxVirtualJoystickComponent
    ],
    entryComponents: [
        NgxVirtualJoystickComponent
    ]
})
export class NgxVirtualJoystickModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxVirtualJoystickModule
        };
    }

}