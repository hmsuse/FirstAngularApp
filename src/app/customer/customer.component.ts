import { Component, OnInit } from '@angular/core';
import {CustomerService} from './customer.service';
import { Observable, from } from "rxjs";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers:[CustomerService]
})
export class CustomerComponent implements OnInit {
 customers : Observable<[]>;

 //customers: Array<any>;
 
  constructor(private _customerService:CustomerService) { }

  ngOnInit() {
    this._customerService.getAllCustomer().subscribe((response) => {
      this.customers = response
 });
  
}

}
