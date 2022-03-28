import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
import { listTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toForm = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new listTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
