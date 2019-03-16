import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {  
  constructor(private router: Router) { }
  
  onResultsClick() {
    this.router.navigate(['results']);
  }

  onHumanoClick() {
    this.router.navigate(['humano']);
  }

  onMacacoClick() {
    this.router.navigate(['macaco']);
  }
}
