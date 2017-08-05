import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed: string;

  constructor() {
    this.collapsed = 'yes';
   }

  ngOnInit() {
  }

  public toggle() {
    this.collapsed = (this.collapsed === 'yes' ? 'no' : 'yes');
  }

}
