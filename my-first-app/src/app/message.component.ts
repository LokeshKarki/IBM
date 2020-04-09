import { Component } from "@angular/core";


@Component({
selector:'my-text',
template: `
<h2> Today is {{text}}</h2>
`
})

export class MessageComponent{
    text:string = 'KIMI NO NAWA';
}