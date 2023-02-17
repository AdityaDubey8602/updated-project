import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  container = document.getElementById('container');
  overlayCon = document.getElementById('overlayCon');
  overlayBtn = document.getElementById('overlayBtn');

}
