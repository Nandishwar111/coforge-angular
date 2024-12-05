import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  pname: string = '';
  pmessage: string = '';
  pemail: string = '';
  submittedData: any = null;

  constructor(private router: Router) {

  }

  onSubmit() {
    this.submittedData = {
      name: this.pname,
      email: this.pemail,
      message: this.pmessage
    };

    //after 10 seconds , navigate to 'details' component
    setTimeout(() => {
      this.router.navigate(['/det'], {
        state:{data:this.submittedData},
      });
    }, 10000); //10 Seconds
  }
}
