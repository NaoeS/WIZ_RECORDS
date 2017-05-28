import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DeckService } from '../../../services/deck/deck.service';

import { mockData } from './mock';

@Component({
  selector: 'app-record-index',
  templateUrl: './record-index.component.html',
  styleUrls: ['./record-index.component.scss'],
  providers: [ DeckService ]
})
export class RecordIndexComponent implements OnInit {
  myDecks: Array<any>;
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
