import {HasFormater} from '../interface/HasFormater.js'

export class Payment implements HasFormater {
    
    constructor(
        readonly recipient :string,
        private details :string,
        public amount : number

    ){}

    format(){
        return `${this.recipient} owned ${this.amount} for ${this.details}`;
    }


}