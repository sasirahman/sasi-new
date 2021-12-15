import { LightningElement, track } from 'lwc';

export default class LogicalLwcDemo extends LightningElement {
    @track greeting = "Welcome to Lwc";
    @track message = "LWC Methodology";

    @track contacts= [

        { 
            Id : '00256234854545',
            name : 'drew'

        },

        {

            Id : '009565333333',
            name : 'cruz'
        },

        {
            Id : '0023654256322',
            name : 'will'

        }
    ];
}