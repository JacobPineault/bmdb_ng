import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-create',
  templateUrl: './credit-create.component.html',
  styleUrls: ['./credit-create.component.css'],
})
export class CreditCreateComponent implements OnInit {
  title: string = 'Credit-create';
  credit: Credit = new Credit();
  submitBtnTitle: string = 'Create';

  constructor(private creditSvc: CreditService, private router: Router) {}

  ngOnInit(): void {}
}
