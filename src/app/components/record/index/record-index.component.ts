import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DeckService } from '../../../services/deck/deck.service';

import { mockData } from './mock';

import * as _ from 'lodash';

@Component({
  selector: 'app-record-index',
  templateUrl: './record-index.component.html',
  styleUrls: ['./record-index.component.scss'],
  providers: [ DeckService ]
})
export class RecordIndexComponent implements OnInit {
  myDecks: any[];
  currentDeck: any;

  constructor(private _deckService: DeckService, private _router: Router) { }

  ngOnInit() {
    this._setMyDecks();
  }

  onClickEdit(id: string) {
    this._router.navigate(['/record/edit', id]);
  }

  onClickNew(id: string) {
    this._router.navigate(['/record/new', id]);
  }

  onClickDelete(id: string) {
    if ( confirm('レコードを削除しますか？') === true ) {
      console.log('record deleted');
    }
  }

  sortRecord(records: Array<any>) {
    if (!records) {
      return [];
    }
    return records.sort((a, b) => {
      return (a.date > b.date ? 1 : -1);
    });
  }

  getResultString(result: string) {
    switch (result) {
      case 'victory':
        return '勝利';
      case 'defeat':
        return '敗北';
      case 'draw':
        return '引分';
      default:
        return '';
    };
  }

  getVictorySum() {
    return _.filter(this.currentDeck.records, (r) => {
      return r['result'] === 'victory';
    }).length;
  }

  getDefeatSum() {
    return _.filter(this.currentDeck.records, (r) => {
      return r['result'] === 'defeat';
    }).length;
  }

  getDrawSum() {
    return _.filter(this.currentDeck.records, (r) => {
      return r['result'] === 'draw';
    }).length;
  }

  getWinRate() {
    const vCnt = this.getVictorySum();
    const deCnt = this.getDefeatSum();
    const drCnt = this.getDrawSum();
    return ((vCnt / (vCnt + deCnt + drCnt)) * 100).toFixed(2);
  }

  getMatchData(game: string, result: string) {
    let count = 0;
    _.each(this.currentDeck.records, (r) => {
      if (r['match'][game] === result) {
        count++;
      };
    });

    return count;
  }

  getWinMatchRate(game: string) {
    const vCnt = this.getMatchData(game, 'victory');
    const deCnt = this.getMatchData(game, 'defeat');
    const drCnt = this.getMatchData(game, 'draw');
    return ((vCnt / (vCnt + deCnt + drCnt)) * 100).toFixed(2);
  }

  private _fetchMyDecks() {
    return this._deckService.fetchMyDecks();
  }

  private _setMyDecks() {
    this.myDecks = this._fetchMyDecks();
    this.currentDeck = this.myDecks[0];
    // this.myDecks = mockData.decks;
    // this.currentDeck = this.myDecks[0];
  }
}
