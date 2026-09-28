import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-component',
  standalone: false,
  styleUrl: './binding-event-component.css',
  templateUrl: './binding-event-component.html',
})
export class BindingEventComponent {
  a:number=5
  b:number=10
  result:string="result here"
  doSolutiuon(hsa:string,hsb:string):void{
    this.a=parseFloat(hsa)
    this.b=parseFloat(hsb)
    if(this.a==0 && this.b==0){
      this.result="Result is undefined"
    }else if(this.a==0){
      this.result="Result is 0"
    }else{
      this.result="x = "+(this.a/this.b)
    }
  }
}

