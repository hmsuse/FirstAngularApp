import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer/customer';
import { CustomerService } from '../customer/customer.service';
import { Router} from '@angular/router';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customers : Observable<Customer[]>;

  constructor(private customerService : CustomerService,private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.customers = this.customerService.getAllCustomer();
  }
  deleteCustomer(studentId: number) {
    this.customerService.deleteCustomer(studentId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  customerDetails(id: number){
    this.router.navigate(['details',id])
  }
  
  updateCustomer(id: number){
    this.router.navigate(['update',id]);
  }

}
