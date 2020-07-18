import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  authStatus: boolean;
  username: string;
  constructor() { }

  ngOnInit(): void {

  }

  logout() {
    this.username = null
  }
}
