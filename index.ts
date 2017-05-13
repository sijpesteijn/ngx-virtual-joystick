import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxVirtualJoystickComponent } from './src/ngx-virtual-joystick.component';
import { StickComponent } from './src/stick/stick.component';

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
    ]
})
export class NgxVirtualJoystickModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxVirtualJoystickModule
        };
    }

}