import {
    AfterViewInit, Component, ElementRef, EventEmitter, HostListener,
    Input, Output, ViewChild,
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
    private msg: string;

    constructor(private element: ElementRef) {
    }

    ngAfterViewInit(): void {
        this.center.push(this.width / 2);
        this.center.push(this.height / 2);
    }

    @HostListener('touchstart', ['$event'])
    onTouchstart(event: TouchEvent): boolean {
        this.msg = '' + event;
        this.handleDownEvent(event.touches[0].pageX, event.touches[0].pageY);
        return false; // Call preventDefault() on the event
    }

    @HostListener('mousedown', ['$event'])
    onMousedown(event: MouseEvent): boolean {
        this.handleDownEvent(event.offsetX, event.offsetY);
        return false; // Call preventDefault() on the event
    }

    @HostListener('touchend', ['$event'])
    @HostListener('touchcancel', ['$event'])
    @HostListener('mouseup')
    onMouseup(): boolean {
        this.show = false;
        return false; // Call preventDefault() on the event
    }

    @HostListener('touchmove', ['$event'])
    onTouchMove(event: TouchEvent): void {
        this.handleMoveEvent(event.touches[0].pageX, event.touches[0].pageY);
    }

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent): void {
        this.handleMoveEvent(event.offsetX, event.offsetY);
    }

    private handleDownEvent(offsetX: number, offsetY: number): void {
        this.show   = true;
        this.startX = offsetX;
        this.startY = offsetY;
        this.center = [];
        this.center.push(offsetX);
        this.center.push(offsetY);
    }

    private handleMoveEvent(offsetX: number, offsetY: number): void {
        if (this.show) {
            this.center = [];
            this.center.push(offsetX);
            this.center.push(offsetY);
            this.onChange.emit({
                deltaX: -1 * (this.startX - offsetX), deltaY: this.startY - offsetY
            });
        }
    }
}