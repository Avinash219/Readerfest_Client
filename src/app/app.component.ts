import { Component } from '@angular/core';
import { url } from './SERVICE_URL';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TapriPoint';

  constructor(private _http: HttpClient) { }
  ngOnInit() {

  }
}
