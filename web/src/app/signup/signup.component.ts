import { Component, OnInit } from '@angular/core';
import { AuthController, UserModel } from '@example/client';
import { UserService } from '../user.context.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  userName: string;
  password: string;
  ngOnInit() {
  }


  async trySignup() {
    const userRequest: UserModel = { Email: this.userName, Password: this.password };

    const result = await AuthController.signup(userRequest);

    if (result.token) {
      this.userService.setToken(result.token);
      this.router.navigate(['dashboard']);
    }
  }

}
