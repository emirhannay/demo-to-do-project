import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { DenemeComponent } from './deneme/deneme.component';



@NgModule({
  declarations: [
    
    DenemeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [DenemeComponent]
})
export class AppModule { }
