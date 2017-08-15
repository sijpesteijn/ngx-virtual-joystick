import {
    AfterViewInit, Component, ElementRef, EventEmitter, HostListener,
    Input, Output, ViewChild,
} from '@angular/core';
let offset: any = require('mouse-event-offset');

@Component({
    selector: 'virtual-joystick',
    template: `<div class="virtual-joystick">
    <stick *ngIf="show" [center]="center" [radius]="radius"></stick>
    <div class="stick-base" *ngIf="show">
        <svg>
            <circle [attr.cx]="startX" [attr.cy]="startY" [attr.r]="40"
              [attr.stroke]="'green'" [attr.stroke-width]="4" [attr.fill]="'yellow'" />
        </svg>
    </div>
</div>`,
    styles  : [`
.virtual-joystick {
    width: 100%;
    height: 100%;
    background-color: #7a8b94;
}

.stick, .stick-base {
    position: absolute;
    width: 100%;
    height: 100%;
}

.stick-base > svg {
    width: 100%;
    height: 100%;
}`]
})
export class NgxVirtualJoystickComponent implements AfterViewInit {
    @Input('width') width: number   = 100;
    @Input('height') height: number = 100;
    @Input('radius') radius: number = 20;
    @Output('onChange') onChange: EventEmitter<any> = new EventEmitter();
    @ViewChild('stick') stick: ElementRef;
    show: boolean           = false;
    center: number[]        = [];
    startX: number = 0;
    startY: number = 0;

    constructor(private element: ElementRef) {
    }

    ngAfterViewInit(): void {
        this.center.push(this.width / 2);
        this.center.push(this.height / 2);
    }

    @HostListener('touchstart', ['$event'])
    onTouchStart(event: any): boolean {
        let target: any   = event.currentTarget;
      console.log('Target ', target);
        let touch: any    = event.changedTouches[0];
      console.log('Touch ', touch);
        let pos: number[] = offset(touch, target);
        this.handleDownEvent(pos[0], pos[1]);
        return false; // Call preventDefault() on the event
    }

    @HostListener('mousedown', ['$event'])
    onMouseDown(event: any): boolean {
        this.handleDownEvent(event.offsetX, event.offsetY);
        return false; // Call preventDefault() on the event
    }

    @HostListener('touchend', ['$event'])
    @HostListener('touchcancel', ['$event'])
    @HostListener('mouseup')
    onMouseUp(): boolean {
        this.show = false;
        return false; // Call preventDefault() on the event
    }

    @HostListener('touchmove', ['$event'])
    onTouchMove(event: any): void {
        let target: any = event.currentTarget;
        let touch: any = event.changedTouches[0];
        let pos: number[] = offset(touch, target);
        this.handleMoveEvent(pos[0], pos[1]);
    }

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: any): void {
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