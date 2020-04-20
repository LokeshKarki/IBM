import { Choice } from "src/app/models/choice";
export class Question {

    constructor(public id: number, public name: string, public choice: Array<Choice>)
    {

    }
}

