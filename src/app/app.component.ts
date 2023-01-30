import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  allowserver = false;
  servercreationstatus = 'no server is created';
  servername = 'testserver';
  servercreated = false;
  oncreateserver() {
    this.servercreated = true;
    this.servercreationstatus =
      'server is created. name of the server is' + this.servername;
  }
  onupdateserver() {
    this.servername = (<HTMLInputElement>event.target).value;
  }
}