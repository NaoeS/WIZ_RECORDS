import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DatePickerOptions, DateModel } from 'ng2-datepicker';

import { DeckService } from '../../../services/deck/deck.service';

import { matchPattern } from '../../../consts/match-pattern';
import { resultState } from '../../../consts/result-state';

@Component({
  selector: 'app-record-new',
  templateUrl: './record-new.component.html',
  styleUrls: ['./record-new.component.scss'],
  providers: [ DeckService ]
})
export class RecordNewComponent implements OnInit {
  myDeck: any;
  decks: Array<any>;
  opDeck: any;
  date: DateModel;
  options: DatePickerOptions;
  matchPt: any = matchPattern;
  resultSt: Array<any> = resultState;

  params: any = {
    result: '',
    opDeckName: '',
    match: {
      game1: '',
      game2: '',
      game3: ''
    },
    date: '',
    notice: ''
  };

  constructor(private _deckService: DeckService, private _router: Router, private _route: ActivatedRoute) {
    this.options = new DatePickerOptions();
  }

  ngOnInit() {
    this._route.params
      .subscribe(params => {
        this.decks = this._deckService.fetch();
        this.myDeck = this._deckService.find(params['id']);
      });
  }

  resetGameResult() {
    console.log(this.date);
    this.params.match = {
      game1: '',
      game2: '',
      game3: ''
    };
  }

  onClickSubmit() {
    const _p = this.params;
    if (!_p.result || !_p.opDeckName || !_p.match.game1 || !this.date) {
      console.log(_p);
      return;
    }
    _p.date = this.date.formatted;
    this._deckService.createRecord(_p, this.myDeck.id);
    this._router.navigate(['record/index']);
  };
}
