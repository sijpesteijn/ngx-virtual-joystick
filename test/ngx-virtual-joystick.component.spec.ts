import {
    inject,
    ComponentFixture,
    TestBed, async
} from '@angular/core/testing';

import { NgxVirtualJoystickModule } from '../index';
import { NgxVirtualJoystickComponent } from '../src/ngx-virtual-joystick.component';

xdescribe('virtual-joystick component', () => {
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
        expect(this.component.question).toEqual('Are you sure?');
        expect(this.component.show).toBe(false);
        expect(this.element.querySelectorAll('.fa-trash').length).toBe(1);
        expect(this.element.querySelectorAll('.delete-confirm-question').length).toBe(0);
    });

    it('should show the question when clicked', () => {
        this.component.show = true;
        this.fixture.detectChanges();
        expect(this.component.show).toBe(true);
        expect(this.element.querySelectorAll('.fa-trash').length).toBe(1);
        expect(this.element.querySelectorAll('.delete-confirm-question').length).toBe(1);
    });

    it('should confirm the delete when ok clicked', () => {
        this.component.show = true;
        spyOn(this.component.onConfirm, 'emit');
        this.fixture.detectChanges();
        this.component.sendConfirm();
        expect(this.component.onConfirm.emit).toHaveBeenCalled();
    });

    it('should confirm the cancel when cancel clicked', () => {
        this.component.show = true;
        spyOn(this.component.onCancel, 'emit');
        this.fixture.detectChanges();
        this.component.sendCancel();
        expect(this.component.onCancel.emit).toHaveBeenCalled();
    });

});