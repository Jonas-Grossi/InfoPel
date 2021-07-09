import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee.model';


@Component({
  selector: 'app-employee-read',
  templateUrl: './employee-read.component.html',
  styleUrls: ['./employee-read.component.css']
})
export class EmployeeReadComponent implements OnInit {

  employees: Employee[] = [];
  displayedColumns = ['id','name','type','action']
  constructor(private EmployeeService: EmployeeService) { }

  ngOnInit(): void {

      this.EmployeeService.read().subscribe(employees => {
      this.employees = employees
        
      console.log(employees)
    })
  }

}
