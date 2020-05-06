import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUNDS } from '../data/rounds.data';
import { Round } from '../models/round';

@Component({
  selector: 'app-round-selection',
  templateUrl: './round-selection.component.html',
  styleUrls: ['./round-selection.component.scss']
})
export class RoundSelectionComponent implements OnInit {

  rounds: Round[];

  constructor(
    private router: Router,
  ) {
    this.rounds = ROUNDS;
   }

  ngOnInit(): void {
  }

  goToQuestion(rndId: number, answerMode?: boolean) {
    if (!answerMode) {
      this.router.navigate(['/questions'], { queryParams: { 'rnd': rndId } });
    }
    else {
      this.router.navigate(['/questions'], { queryParams: { 'rnd': rndId, 'answermode': answerMode } });
    }
  }
}
