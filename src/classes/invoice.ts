import {HasFormater} from '../interface/HasFormater.js'

export class Invoice implements HasFormater {
    
    constructor(
        readonly client :string,
        private details :string,
        public amount : number

    ){}

    format(){
        return `${this.client} owns ${this.amount} for ${this.details}`;
    }


}