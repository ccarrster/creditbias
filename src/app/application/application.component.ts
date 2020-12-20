import { Component, OnInit } from '@angular/core';
import { Application } from '../application.model';
import { LENDERS } from '../mock-lenders';
import { ETHNICITIES } from '../mock-ethnicity';
import { TERMS } from '../mock-terms';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  lenders = LENDERS;
  ethnicities = ETHNICITIES;
  terms = TERMS;
  application = new Application(5000, 2, 9.5, 70000, false, false, 1, 1);

  constructor() { }

  ngOnInit(): void {
  }

  clear(){
    this.application = new Application(0, 1, 0, 0, false, false, 1, 1);
    alert('Thank you for your submission.');
  }

}
