import { Component, OnInit } from '@angular/core';
import { LENDERS } from '../mock-lenders';

@Component({
  selector: 'app-lender',
  templateUrl: './lender.component.html',
  styleUrls: ['./lender.component.css']
})
export class LenderComponent implements OnInit {
  lenders = LENDERS;
  constructor() { }

  ngOnInit(): void {
  }

}
