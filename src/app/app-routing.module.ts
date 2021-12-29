import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  {path:'',redirectTo:'customer',pathMatch:'full'}, 
  {path:'customers',component:CustomerListComponent},
  {path:'add',component:CreateCustomerComponent},
  {path:'update/:studentId',component:UpdateCustomerComponent},
  {path:'details/:studentId',component:CustomerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
