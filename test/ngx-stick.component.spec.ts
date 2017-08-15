import {
    inject,
    ComponentFixture,
    TestBed, async
} from '@angular/core/testing';

import { StickComponent } from '../src/stick/stick.component';
import { NgxVirtualJoystickModule } from '../src/ngx-virtual-joystick.module';

describe('stick component', () => {
    let fixture: ComponentFixture<StickComponent>;
    let component: StickComponent;
    let element: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                NgxVirtualJoystickModule.forRoot()
            ]
        }).compileComponents();
      }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StickComponent);
        component = fixture.componentInstance;
        expect(component).toBeDefined();
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should show default', () => {
      component.theCenter = [100, 100];
      expect(true).toBeTruthy();
    });

});