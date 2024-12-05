import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username:string='';
  password:string='';
  errorMessage:string='';

  //ststic login credentials
  validUsername='admin';
  validPassword='password';

  //DI router DI using constructor
  constructor(private router:Router){

  }
    login(){
      if(this.username === this.validUsername && this.password === this.validPassword){
        this.router.navigate(['/']);
      }else{
        this.errorMessage='Invalid Credentials, please try again';
      }
    }
}
