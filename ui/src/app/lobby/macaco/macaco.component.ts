import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  templateUrl: './macaco.component.html',
  styleUrls: ['./macaco.component.css']
})
export class MacacoComponent {
  name = new FormControl('');
}
