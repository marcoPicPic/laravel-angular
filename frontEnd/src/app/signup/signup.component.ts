import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { AuthService } from "../service/auth.service";

@Component({
  selector: 'ng-app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    this.authService.signup(form.value.username, form.value.email, form.value.password)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

}
