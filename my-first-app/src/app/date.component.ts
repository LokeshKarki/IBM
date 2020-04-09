import { Component } from "@angular/core";


@Component({
selector:'my-date',
template: `
<h2> Today is {{now}}</h2>
`
})

export class DateComponent{
    now = new Date();
}