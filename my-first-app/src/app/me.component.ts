import { Component } from "@angular/core";

@Component({
    selector: 'me',
    template:`<h2>kattapa {{now}}<h2>`

})

export class Me{
    now:string = "spirited away"
}
