import { Component, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'stick',
    template: require('./stick.html'),
    styles: [require('./stick.css')]
})
export class StickComponent {
    @Input('radius') radius: number;
    @Input('width') width: number;
    @Input('height') height: number;
    @Input('center')
    set theCenter(center: number[]) {
        this.left = center[0];
        this.top = center[1];
    }
    private left: number = 20;
    private top: number = 20;

    constructor(private element: ElementRef) {}
}