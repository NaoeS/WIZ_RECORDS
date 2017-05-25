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
  records: Array<any>;
  myDecks: Array<any>;

  constructor(private _deckService: DeckService, private _router: Router) { }

  ngOnInit() {
    this._setMyDecks();
  }

  onClickEdit(id: string) {
    this._router.navigate(['/record/edit', id]);
  }

  onClickDelete(id: string) {
    if ( confirm('レコードを削除しますか？') === true ) {
      console.log('record deleted');
    }
  }

  private _fetchMyDecks() {
    return this._deckService.fetchMyDecks();
  }

  private _setMyDecks() {
    // const decks = this._fetchMyDecks();
    // this.myDecks = decks;
    this.myDecks = mockData.decks;
  }
}
