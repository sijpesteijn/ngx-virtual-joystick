import {
    AfterViewInit, Component,
    ComponentFactory,
    ComponentFactoryResolver, ComponentRef, Directive, ElementRef, EventEmitter, HostListener,
    Input,
    OnInit, Output, ViewChild,
    ViewContainerRef
} from '@angular/core';

@Component({
    selector: 'virtual-joystick',
    template: require('./ngx-virtual-joystick.html'),
    styles  : [require('./ngx-virtual-joystick.css')]
})
export class NgxVirtualJoystickComponent implements AfterViewInit {
    @Input('width') width: number   = 100;
    @Input('height') height: number = 100;
    @Input('radius') radius: number = 20;
    @Output('onChange') onChange: EventEmitter<any> = new EventEmitter();
    @ViewChild('stick') stick: ElementRef;
    private show: boolean           = false;
    private center: number[]        = [];
    private startX: number = 100;
    private startY: number = 100;

    constructor(private element: ElementRef) {
    }

    ngAfterViewInit(): void {
        this.center.push(this.width / 2);
        this.center.push(this.height / 2);
    }

    @HostListener('mousedown', ['$event'])
    onMousedown(event: MouseEvent): boolean {
        this.show = true;
        this.startX = event.offsetX;
        this.startY = event.offsetY;
        this.center = [];
        this.center.push(event.offsetX);
        this.center.push(event.offsetY);
        return false; // Call preventDefault() on the event
    }

    @HostListener('mouseup')
    onMouseup(): boolean {
        this.show = false;
        return false; // Call preventDefault() on the event
    }

    @HostListener('mousemove', ['$event'])
    onMouseEnter(event: MouseEvent): void {
        if (this.show) {
            this.center = [];
            this.center.push(event.offsetX);
            this.center.push(event.offsetY);
            this.onChange.emit({deltaX: -1 * (this.startX - event.offsetX), deltaY: this.startY - event.offsetY});
        }
    }
}