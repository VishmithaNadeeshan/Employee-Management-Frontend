export class Employee{
  id?: number;
  name: string;
  email: string;
  departmentType: String;


  constructor(name: string, email: string,departmentType: String, id?: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.departmentType = departmentType;
  }
}