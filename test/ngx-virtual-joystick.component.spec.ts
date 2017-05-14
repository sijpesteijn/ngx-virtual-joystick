import {
    inject,
    ComponentFixture,
    TestBed, async
} from '@angular/core/testing';

import { NgxVirtualJoystickModule } from '../index';
import { NgxVirtualJoystickComponent } from '../src/ngx-virtual-joystick.component';

describe('virtual-joystick component', () => {
    let fixture: ComponentFixture<NgxVirtualJoystickComponent>;
    let component: NgxVirtualJoystickComponent;
    let element: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NgxVirtualJoystickModule.forRoot()
            ]
        });
        this.fixture = TestBed.createComponent(NgxVirtualJoystickComponent);
        this.component = this.fixture.componentInstance;
        expect(this.component).toBeDefined();
        this.element = this.fixture.nativeElement;
    });

    it('should show default', () => {
        this.fixture.detectChanges();
        expect(this.component.show).toBe(false);
    });

});