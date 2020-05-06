import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, ActivationEnd } from '@angular/router';
import { Question } from '../models/question';
import { QUESTIONS } from '../data/questions.data';
import { Round } from '../models/round';
import { ROUNDS } from '../data/rounds.data';
import { $ } from 'protractor';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  currentRoundId: number;
  currentQuestionId: number = 1;
  currentRoundQus: Question[];
  currentRound: Round;
  answerMode: boolean;
  answerImage: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentRoundId = params['rnd'];
      this.answerMode = params['answermode'] ? true : false;
    });

    this.currentRoundQus = this.getCurrentRoundQus();
    this.currentRound = this.getCurrentRound();
  }

  getCurrentRound(): Round {
    return ROUNDS.filter(
      rnd => rnd.id == this.currentRoundId)[0];
  }

  getCurrentRoundQus(): Question[] {
    return QUESTIONS.filter(
      qu => qu.rndId == this.currentRoundId);
  }

  verifyRoundAndQu(current: Question): boolean {
    if (this.currentRoundId == current.rndId && this.currentQuestionId == current.id) {
      return true;
    }
    return false;
  }

  getAnswerImage(current: Question): string {
    var splitSource = current.image.split('/');
    var answerImgFile = "/ans-" + splitSource[splitSource.length-1];
    splitSource = splitSource.splice(0, splitSource.length-1);
    var answerImg = splitSource.join('/') + answerImgFile;
    return answerImg;
  }
}
