import { Component } from '@angular/core'

@Component({
    selector: 'app-nav',
    template: `<div id="nav-wrapper">Hello Nav</div>
    <div>{{ title }}</div>`,
    styles: ['#nav-wrapper: {background-color: red;}'],

})
export class NavComponent {
    title = 'title navigation'
 }