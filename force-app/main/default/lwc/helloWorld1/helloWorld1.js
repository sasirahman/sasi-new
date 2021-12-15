import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'World';
  
  
  
  
  
  
  contacts = [
    {
      name : 'sasi',
      role : 'developer',
      phone : '986'
    },
    {
      name : 'kumar',
      role : 'testing',
      phone : '968754'
    }
  ];









  changeHandler(event) {
    this.greeting = event.target.value;
  }
}