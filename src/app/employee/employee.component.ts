import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employeeId:number=101;
  employeeName:String="Teja";
  employeeAge:number=22;

  title="Employee Details-Data Binding using various Directives"

  isManager:boolean=true;

  //Array
  skills:string[]=['JavaScript','Angular','TypeScript']

  //Enum
  Position:PositionType=PositionType.SeniorDeveloper

  //Object 
  address:{street:string,city:string,postalCode:number}={
    street:'123 Main steet',
    city:'Bangalore',
    postalCode:560064
  }

  //Any data type (can be of any type)
  extraInfo: any='Aditional employee info';

  //Event building - handling method
  message: string='';

  //Two way data binding
  employeePosition :string='Software Engineer';

  //Event Binding Method
  hello():void{
    this.message="Hello from event Binding in Angular by -"+this.employeeName;
  }
  clear():void{
    this.message='';
  }

  toggleManagerStatus():void{
    this.isManager = !this.isManager;
  }

  //Property Binding - one way Binding
  username :string = 'Mohan Nair';
  info:string='Property Binding - one way';

  updateUserName(){
    this.username='Rajesh';
  }

  convertToDate(){
    const date = new Date();
    return date.toLocaleDateString();
  }

  add():number{
    return 10+200;
  }
}

//Enum for Position Type
enum PositionType{
  JuniorDeveloper,
  SeniorDeveloper,
  TeamLead
}
