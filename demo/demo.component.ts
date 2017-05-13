import { Component } from '@angular/core';
require('font-awesome-webpack');
require('font-awesome/css/font-awesome.css');

@Component({
    selector: 'demo-app',
    template: require('./demo.html'),
    styles: [require('./demo.css')]
})
export class DemoComponent {
    private sections: Map<string, string> = new Map<string, string>();
    private point: any;

    constructor() {
        this.sections.set('default', 'template');
        this.sections.set('custom_question', 'template');
    }

    private activate(section: string, tab: string): void {
        this.sections.set(section, tab);
    }
    private isActive(section: string, tab: string): boolean {
        return this.sections.get(section) === tab;
    }

    private show($event: any): void {
        this.point = $event;
    }
}
