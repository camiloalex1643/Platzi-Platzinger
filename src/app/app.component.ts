import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzinger';

  //Injectar el router. Se coloca public para acceder desde el HTML
  constructor (public router: Router){}
}
