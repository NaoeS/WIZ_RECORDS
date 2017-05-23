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
    this.decks = this._deckService.fetch();
  }

}
