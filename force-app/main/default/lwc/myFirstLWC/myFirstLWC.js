import { LightningElement, api, track} from 'lwc';
import Id from '@salesforce/user/Id';
export default class MyFirstLWC extends LightningElement {

@api name = 'Thomas';
@track title = 'Testing';
phone ='123554789';
email ='sasi@minus.com';
userId ='Id';

clickHandler(){

    console.log('im inside lwc');
    this.name = 'kumar';
    this.title = 'Developing';
}

}