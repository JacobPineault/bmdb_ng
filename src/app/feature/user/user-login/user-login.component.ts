import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  message: string = '';
  user: User = new User();

  constructor(private userSvc: UserService, private router: Route) {}

  ngOnInit(): void {}
}
