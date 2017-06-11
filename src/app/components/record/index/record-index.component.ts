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
  RECORD_INDEX_STORAGE_KEY = 'wizRecords.record.index';
  myDecks: any[];
  currentDeck: any;

  constructor(private _deckService: DeckService, private _router: Router) { }

  ngOnInit() {
    this._setMyDecks();
  }

  onClickEdit(deck_id: string, record_index: number) {
    this._router.navigate(['/record/edit', deck_id, record_index]);
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

  saveSelectedDeck() {
    if (this.currentDeck) {
      localStorage.setItem(this.RECORD_INDEX_STORAGE_KEY, this.currentDeck.id);
    }
  }

  private _fetchMyDecks() {
    return this._deckService.fetchMyDecks();
  }

  private _setMyDecks() {
    this.myDecks = this._fetchMyDecks();
    if (this.myDecks.length === 0) {
      alert('マイデッキを登録してください');
      this._router.navigate(['']);
    }

    this.currentDeck = this.myDecks[0];
    const savedDeckId = localStorage.getItem(this.RECORD_INDEX_STORAGE_KEY);
    if (!savedDeckId) {
      return;
    }
    const findDeck = this._deckService.find(savedDeckId);
    if (findDeck) {
      let index: number;
      this.myDecks.forEach((deck, i) => {
        if (deck.id === findDeck.id) { index = i; }
      });
      this.currentDeck = this.myDecks[index];
    }
  }
}
