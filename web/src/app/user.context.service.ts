import { Injectable, Output } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class UserService {
  constructor(public jwtHelper: JwtHelperService) {

  }
  @Output()
  public group;

  public groupChanges: Function[] = [];

  @Output()
  public user: any;

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  public setToken(token: any) {
    localStorage.setItem('token', token);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    const isExpired = this.jwtHelper.isTokenExpired(token);
    return !isExpired;
  }

  public getUser() {
    const str = localStorage.getItem('user');
    if (str) {
      return JSON.parse(str);
    }
  }

  public setGroup(group) {

    this.group = group;
    this.groupChanges.forEach(func => func(group));
  }



  public onGroupChange(callback) {
    this.groupChanges.push(callback);
  }
  public getGroup() {
    return this.group;
  }
}
