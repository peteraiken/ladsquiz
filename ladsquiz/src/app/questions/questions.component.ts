import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, ActivationEnd } from '@angular/router';
import { Question } from '../models/question';
import { QUESTIONS } from '../data/questions.data';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  currentRoundId: number;
  currentRoundQus: Question[];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentRoundId = params['rnd'];
    });

    this.currentRoundQus = this.getCurrentQuestion();
  }

  getCurrentQuestion(): Question[] {
    this.currentRoundQus = QUESTIONS.filter(
      qu => qu.rndId == this.currentRoundId);
    return this.currentRoundQus;
  }

}
