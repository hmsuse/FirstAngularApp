import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl='http://localhost:9091/api/';
  constructor(private _http:HttpClient) { }

  getCustomer(studentId: number): Observable<any>{
    return this._http.get(`${this.baseUrl+"employee"}/${studentId}`);
  }

  getAllCustomer(): Observable<any>{
    return this._http.get(`${this.baseUrl+"employee"}`);
  }

  createCustomer(customer : object): Observable<any>{
    return this._http.post(`${this.baseUrl+"/employee"}`,customer);
  }

  updateCustomer(custNo: number, value: any): Observable<Object> {
    return this._http.put(`${this.baseUrl+"/employee"}`, value);
  }

  deleteCustomer(studentId: number): Observable<any> {
    return this._http.delete(`${this.baseUrl+"employee"}/${studentId}`, { responseType: 'text' });
  }

}
