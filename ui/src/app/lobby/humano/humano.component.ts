import { Vote } from 'src/app/core/voting/vote.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './humano.component.html',
  styleUrls: ['./humano.component.css']
})
export class HumanoComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  currentGame: Vote;

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolvedData => {
      this.currentGame = resolvedData.currentGame;
    });
  }
}
