import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DatePickerOptions, DateModel } from 'ng2-datepicker';

import { DeckService } from '../../../services/deck/deck.service';

import { matchPattern } from '../../../consts/match-pattern';
import { resultState } from '../../../consts/result-state';

import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'app-record-edit',
  templateUrl: './record-edit.component.html',
  styleUrls: ['./record-edit.component.css'],
  providers: [ DeckService ]
})
export class RecordEditComponent implements OnInit {
  deck: any;
  decks: Array<any>;
  opDeck: any;
  date: DateModel;
  options: DatePickerOptions;
  matchPt: any = matchPattern;
  resultSt: Array<any> = resultState;
  recordIndex: number;

  params: any = {};

  constructor(private _deckService: DeckService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .subscribe(params => {
        this.recordIndex = params['record_index'];
        this.decks = this._deckService.fetch();
        this.deck = this._deckService.find(params['deck_id']);
        this.params = this.deck.records[this.recordIndex];
        this.params.match = this._getMatchValue();
        const date = moment(this.params.date);
        this.date = {
          day: date.format('DD'),
          month: date.format('MM'),
          year: date.format('YYYY'),
          formatted: this.params.date,
          momentObj: date
        };
      });
  }

  resetGameResult() {
    this.params.match = {
      game1: '',
      game2: '',
      game3: ''
    };
  }

  onClickEdit() {
    const _p = this.params;
    if (!_p.result || !_p.opDeckName || !_p.match.game1 || !this.date) {
      console.log(_p);
      return;
    }
    _p.date = this.date.formatted;
    this._deckService.editRecord(_p, this.deck.id, this.recordIndex);
    this._router.navigate(['record/index']);
  };

  private _getMatchValue() {
    console.log(this.params);
    const match = _.find(matchPattern[this.params.result], (m) => {
      return JSON.stringify(m['val']) === JSON.stringify(this.params.match);
    });
    return match['val'];
  }
}
