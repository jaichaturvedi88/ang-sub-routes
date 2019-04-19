import { Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poc';

  constructor(
    private router: Router
  ){

  }
  goToDashboard(){
    this.router.navigate(['/dashboard/home']);
  }
}
