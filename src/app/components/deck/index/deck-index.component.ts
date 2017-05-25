import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DeckService } from '../../../services/deck/deck.service';

@Component({
  selector: 'app-deck-index',
  templateUrl: './deck-index.component.html',
  styleUrls: ['./deck-index.component.scss'],
  providers: [ DeckService ]
})
export class DeckIndexComponent implements OnInit {
  decks: Array<any>;

  constructor(private _deckService: DeckService, private _router: Router) { }

  ngOnInit() {
    this._fetchIndex();
  }

  onClickEdit(id: string) {
    this._router.navigate(['/deck/edit', id]);
  }

  onClickDelete(id: string) {
    if ( confirm('デッキを削除しますか？') === true ) {
      this._deckService.delete(id);
      this._fetchIndex();
    }
  }

  private _fetchIndex() {
    this.decks = this._deckService.fetch();
  }
}
