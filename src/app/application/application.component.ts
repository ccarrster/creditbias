import { Component, OnInit } from '@angular/core';
import { Application } from '../application.model';
import { LENDERS } from '../mock-lenders';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  lenders = LENDERS;
  application = new Application(1, '1', 1);

  constructor() { }

  ngOnInit(): void {
  }

}
