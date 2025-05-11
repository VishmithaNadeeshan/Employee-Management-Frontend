import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { EmployeeService } from '../../service/EmployeeService';
import { Employee } from '../../model/Employee';
@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {
  searchTerm: string = '';

  ngOnInit(): void {
    this.loadCustomersTable();
  }

  constructor(
  private http: HttpClient,
  private employeeService: EmployeeService
  ) {}


  employee: Employee = new Employee('', '', '',);

  private resetForm() {
    this.employee = new Employee('', '', '');
    this.isEditMode = false;
    this.selectedEmployeeId = null;
  }

  isEditMode: boolean = false;
  selectedEmployeeId: number | null = null;

  editEmployee(employee: Employee) {
    this.isEditMode = true;
    this.selectedEmployeeId = employee.id as number;
    this.employee = { ...employee };
  }

  cancelEdit() {
    this.resetForm();
  }

    deleteEmployee(id?: number) {
  if (!id) return;

  if (confirm('ARE YOU SURE YOU WANT TO DELETE THIS CUSTOMER?')) {
    this.employeeService.delete(id).subscribe(() => {
      this.loadCustomersTable();
    });
  }
}


  employeeList: Employee[] = [];

  loadCustomersTable() {
  this.employeeService.getAll().subscribe((employees: Employee[]) => {
    this.employeeList = employees;
  });
}

}
