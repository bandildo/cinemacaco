import { MacacoVote } from 'src/app/core/voting/macaco-vote.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './humano.component.html',
  styleUrls: ['./humano.component.css']
})
export class HumanoComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  currentGame: MacacoVote;

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolvedData => {
      this.currentGame = resolvedData.currentGame;
    });
  }
}
