import { Component } from '@angular/core';
import { UserService } from './user.context.service';
import { UserModel } from '@example/client';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Example';
  userCheck: UserModel;

  constructor(private userService: UserService, public translate: TranslateService) {
    this.userCheck = userService.getUser();
  }
}
