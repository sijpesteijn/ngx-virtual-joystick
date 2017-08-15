import {
    inject,
    ComponentFixture,
    TestBed, async
} from '@angular/core/testing';

import { NgxVirtualJoystickComponent } from '../src/ngx-virtual-joystick.component';
import { NgxVirtualJoystickModule } from '../src/ngx-virtual-joystick.module';


describe('virtual-joystick component', () => {
    let fixture: ComponentFixture<NgxVirtualJoystickComponent>;
    let component: NgxVirtualJoystickComponent;
    let element: any;

    let elementStub: any = {
      getBoundingClientRect(): any {
        return { left: 3.5, top: 2.5 };
      }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                NgxVirtualJoystickModule.forRoot()
            ]
        }).compileComponents();
      }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxVirtualJoystickComponent);
        component = fixture.componentInstance;
        expect(component).toBeDefined();
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should allow me to use the mouse', () => {
      spyOn(component.onChange, 'emit');
      component.onMouseDown({
        offsetX: 100,
        offsetY: 100
      });
      component.onMouseMove({
        offsetX: 150,
        offsetY: 150
      });
      component.onMouseUp();
      expect(component.onChange.emit).toHaveBeenCalledWith({deltaX: 50, deltaY: -50});
      expect(true).toBeTruthy();
    });

    xit('should allow me to use gustures', () => {
//      mock('mouse-event-offset', { offset: () => {
//        return {
//          offsetX: 150,
//          offsetY: 150
//          };
//      }});
      spyOn(component.onChange, 'emit');
      component.onTouchStart({
        currentTarget: elementStub,
        changedTouches: [{ clientX: 100, clientY: 100 }]
      });
      component.onTouchMove({
        offsetX: 150,
        offsetY: 150
      });
      component.onMouseUp();
      expect(component.onChange.emit).toHaveBeenCalledWith({deltaX: 50, deltaY: -50});
      expect(true).toBeTruthy();
    });

});