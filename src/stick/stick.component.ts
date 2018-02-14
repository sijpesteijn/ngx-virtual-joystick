import { Component, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'stick',
    template: `<div class="stick">
    <svg>
        <circle [attr.cx]="left" [attr.cy]="top" [attr.r]="radius" [attr.fill]="corecolor"/>
    </svg>
</div>`,
    styles: [`
.stick {
  position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.stick > svg {
    width: 100%;
    height: 100%;
}`]
})
export class StickComponent {
    @Input('radius') radius: number;
    @Input('corecolor') corecolor: string;
    @Input('width') width: number;
    @Input('height') height: number;
    @Input('center')
    set theCenter(center: number[]) {
        this.left = center[0];
        this.top = center[1];
    }
    left: number = 20;
    top: number = 20;

    constructor(private element: ElementRef) {}
}
