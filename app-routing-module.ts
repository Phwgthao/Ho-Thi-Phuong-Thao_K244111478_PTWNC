import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { Ex18 } from './ex18/ex18';

const routes: Routes = [
  {path: 'app-binding-property-component', component: BindingPropertyComponent},
  {path: 'app-binding-class-component', component: BindingClassComponent},
  {path: 'app-binding-style-component', component: BindingStyleComponent},
  {path: 'app-binding-event-component', component: BindingEventComponent},
  {path: 'app-binding-two-way-component', component: BindingTwoWayComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-dropdown-list', component: ProductDropdownListComponent},
  {path: 'product-list-call-service', component: ProductListCallServiceComponent},
  {path: 'ex18', component: Ex18},
  // Cơ chế slug, search engine optimze tối ưu cơ chế bộ máy đường truyền
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
