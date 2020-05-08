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
  loggedIn: boolean;
  enteredPassword: string;
  errorLoggingIn: boolean = false;

  constructor(
    private router: Router,
  ) {
    this.rounds = ROUNDS;
  }

  ngOnInit(): void {
  }

  verifyLogin(): void {
    this.errorLoggingIn = false;
    if (this.enteredPassword == "IAmTheQuizmaster1234") {
      this.loggedIn = true;
    }
    
    this.errorLoggingIn = true;
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
