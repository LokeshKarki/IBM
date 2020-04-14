import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8000/api/employee/'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  fetchAllEmployees(){
    return this.http.get(baseUrl);
  }


  addEmployee()
 { return this.http.post(baseUrl, 
   {
    "name": "Mukesh Ambani",
    "salary": 9123100.00
    } 
 );
 }
}