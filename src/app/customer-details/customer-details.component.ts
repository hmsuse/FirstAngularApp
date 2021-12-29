import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer/customer';
import {CustomerService} from '../customer/customer.service';
import {CustomerListComponent} from '../customer-list/customer-list.component';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

 
  studentId:number;
  customer: Customer;

  constructor(private route: ActivatedRoute,private router: Router,private customerService:CustomerService) { }

  ngOnInit() {
    this.customer=new Customer();
    this.studentId=this.route.snapshot.params['studentId'];

    this.customerService.getCustomer(this.studentId).subscribe(data => {
      console.log(data)
      this.customer=data;
    },error =>console.log(error));
  }

  list(){
    this.router.navigate(['customers']);
  }

}



