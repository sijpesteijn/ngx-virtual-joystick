import { NgModule } from '@angular/core';
import { NgxVirtualJoystickModule } from '../src/index';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';

@NgModule({
    declarations: [DemoComponent],
    imports: [BrowserModule, NgxVirtualJoystickModule.forRoot()],
    bootstrap: [DemoComponent]
})
export class DemoModule {}