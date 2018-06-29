import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  newtitle = 'This value is coming from head component';

  constructor() { }

  ngOnInit() {
  }

}
