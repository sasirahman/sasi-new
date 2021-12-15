import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class SasiKumarExampleLWC extends LightningElement {

    accountNameChangeHandler(event){
        this.accountName = event.target.value;
    }

    createAccount(){
        const fields = {'Name' : this.accountName};
        const recordInput = {apiName : 'Account', fields};

        createRecord(recordInput).then(response => {
            alert('Account has been created : ', response.id);
        }).catch(error =>{
            console.error('Error in creating account : ', error.body.message); 
        });
       
}
}