import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { UserService } from '../user.context.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  providers: [UserService]
})
export class UserInfoComponent implements OnInit {

  userData: any = false;

  constructor(private _ngZone: NgZone,
    private userService: UserService,
    private route: ActivatedRoute, private changeDetector: ChangeDetectorRef) {


    this.route.params.subscribe((data) => {
      this._ngZone.run(async () => {

        // const users = await User.list();
        // const user = await User.get('xxxx');

        // this.userData = this.userService.getUser();
        // if (!this.userData.groups || this.userData.groups.length === 0) {
        //   // await User.attachToGroup(this.userData.id, { 'Name': this.userData.name });
        //   // this.userData = this.userService.getUser();
        // }
        this.changeDetector.detectChanges();
      });
    });

  }


  ngOnInit() {

  }

}
