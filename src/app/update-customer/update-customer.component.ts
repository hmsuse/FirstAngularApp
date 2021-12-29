import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer/customer';
import { CustomerService } from '../customer/customer.service';
import {ActivatedRoute,Router} from '@angular/router';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  studentId:number;
  customer: Customer;
  //submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,private customerService:CustomerService) { }

  ngOnInit() {
    this.customer=new Customer();
    this.studentId=this.route.snapshot.params['studentId'];
    this.customerService.getCustomer(this.studentId).subscribe(data => {
      console.log(data)
      this.customer=data;
    },error =>console.log(error));
  }
  
  updateCustomer(){
    this.customerService.updateCustomer(this.studentId,this.customer)
    .subscribe(data =>console.log(data),error =>console.log(error));
      this.customer=new Customer();
      this.gotoList();
    }

    onSubmit(){
      //this.submitted = true;
      this.updateCustomer();

    }

    gotoList(){
      this.router.navigate(['/customers']);
    }
  }
