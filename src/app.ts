import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormater } from './interface/HasFormater.js';
import { listTemplate } from './classes/ListTemplate.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement;


const type = document.querySelector('#type') as HTMLSelectElement;
const toForm = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new listTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc :HasFormater

    if(type.value === 'invoice'){
        doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
    }else {
        doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');

})
