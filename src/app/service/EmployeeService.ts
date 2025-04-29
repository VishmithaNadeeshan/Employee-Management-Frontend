import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/Employee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  addnewEmployee(Employee: Omit<Employee, 'id'>): Observable<Employee> {
    return this.http.post<Employee>(
      'http://localhost:8080/employee/add',
      Employee
    );
  } 

  updateEmployee(id: string, employee : Employee): Observable<Employee> {
    return this.http.put<Employee>(`http://localhost:8080/employee/update/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/employee/deleteById/${id}`);
  }

  loadEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      'http://localhost:8080/employee/get-All'
    );
  }
}
