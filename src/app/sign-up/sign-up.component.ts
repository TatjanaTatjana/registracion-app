import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: string;
  password: string;
  constructor( public auth: AuthService) { }

  ngOnInit(): void {
  }
  signup(){
    this.auth.signup(this.email, this.password);
    this.email = this.password = '';
  }

}
