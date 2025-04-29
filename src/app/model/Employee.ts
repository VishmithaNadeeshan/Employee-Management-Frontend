export class Employee{
  id?: number;
  name: string;
  email: string;
  departmentType: Enumerator;


  constructor(name: string, email: string,departmentType: Enumerator, id?: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.departmentType = departmentType;
  }
}