import { LightningElement} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class SingleFieldAccountCreation extends LightningElement {

accountName;

    nameChangeHandler(event){
        this.accountName = event.target.value;
    }

    createAccountHandler(){
        const fields = {'Name':this.accountName};
        const recordInput = {apiName : 'Account', fields};

    createRecord(recordInput).then(response => {
        alert('Account Created Successfully: ' , response.Id);
    }).catch(error =>{
        console.error('Error in Creating Account: ', error.body.message);
    });
    

    } 
    }