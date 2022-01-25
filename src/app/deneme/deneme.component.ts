import { Component, OnInit } from '@angular/core';
import { activityItem } from '../activityItem';
import { model } from '../model';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.css']
})
export class DenemeComponent implements OnInit {

  constructor() {
    this.m.items = this.getItemsFromLS();
   }
 
  ngOnInit(): void {
  }

  displayAll : boolean = true;
  inputText : string = "";
   m : model = new model();


  
  getName(){
    return this.m.name;
  }
  getItems(){
    if(this.displayAll){
      return this.m.items;
    }
    else{
   
      return this.m.items.filter(item => item.success == false );
    }
    
  }

  addItem(){
    
    if(this.inputText !="" ){
      let data = {description: this.inputText, success:false};
      this.m.items.push(data);
      let items = this.getItemsFromLS();
      items.push(data);
      localStorage.setItem("items", JSON.stringify(items));
      this.inputText = ""; 
    }
    else{
      alert("Bilgi giriniz");
    }
  }
  getItemsFromLS() {
    let items : activityItem[] = [];

    let value = localStorage.getItem("items");

    if(value != null) {
      items = JSON.parse(value);
    }

    return items;
  }
  displayCount(){
      return this.m.items.filter(i => i.success == true).length;
  }
  getBtnClasses(){
    return {
      'disabled': this.inputText.length == 0,
      'btn-secondary': this.inputText.length ==0,
      'btn-success': this.inputText.length >0
  };
  }
  onActionChanged(item : activityItem) {
    let items = this.getItemsFromLS();

    localStorage.clear();

    items.forEach(i => {
      if(i.description == item.description) {
        i.success = item.success;
      }
    } );
    localStorage.setItem("items", JSON.stringify(items));

    }
  }

  

