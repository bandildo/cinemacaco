import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-copos',
  templateUrl: './copos.component.html',
  styleUrls: ['./copos.component.css']
})
export class CoposComponent {
  name = new FormControl('');
}
