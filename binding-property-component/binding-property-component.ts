import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  standalone: false,
  styleUrl: './binding-property-component.css',
  templateUrl: './binding-property-component.html',
})
export class BindingPropertyComponent {
  public name:string = 'Hồ Thị Phương Thảo'
  public email: string = 'thaohtpk24411e@st.uel.edu.vn'
  public nameid:string="nameid"
  public emailid:string="emailid"
  public isDisabled:boolean=false
  public hello:string="Welcome to K24411E"
  public red_color: string="red"
  public advanced_message: string= '<font color="red">This is advanced message</font>'
}
