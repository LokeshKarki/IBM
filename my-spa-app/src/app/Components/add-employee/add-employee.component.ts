import { Component, OnInit } from '@angular/core';
import { EmbeddedTemplateAst } from '@angular/compiler';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employees: Array<any> = []

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {

    
    this.employeeService.addEmployee()
    .subscribe((res:any)=> {
      console.log(res);
      this.employees = res;
    })
  }

}