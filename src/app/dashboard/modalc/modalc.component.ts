import { Component, Input } from '@angular/core';
import {  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modalc',
  templateUrl: './modalc.component.html',
  styleUrls: ['./modalc.component.css']
})
export class ModalcComponent {
  radio_click:any = "attendance";//bution radio 

  @Input() showModal: boolean = false;

  constructor() {}

  startdate:any[]=[];
   year:any;
   month:any;
   day:any;
  
  openModal(e:any) {
    this.showModal = true;
    const inputDate = new Date(e);
this.year = inputDate.getFullYear();
 this.month = ("0" + (inputDate.getMonth() + 1)).slice(-2); // add leading zero if needed
 this.day = ("0" + inputDate.getDate()).slice(-2); // add leading zero if needed
const outputDate = `${this.year}-${this.month}-${this.day}`;

    this.startdate.push(outputDate);

  }

  closeModal() {
    this.showModal = false;
  }

  change_radio(ev:any){ //changer radio button 
    
    this.radio_click = ev;
    
    console.log(ev);
  }

}
