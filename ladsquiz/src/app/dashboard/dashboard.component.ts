import { Component, OnInit } from '@angular/core';
import { Round } from '../models/round';
import { rounds } from '../data/rounds.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  quizStarted: boolean = false;
  rounds: Round[];

  constructor(
    private router: Router,
  ) {
    this.rounds = rounds;
  }

  ngOnInit(): void {
  }

  goToQuestion(rndId: number) {
    this.router.navigate(['/questions'], { queryParams: { 'rnd': rndId } });
  }

}
