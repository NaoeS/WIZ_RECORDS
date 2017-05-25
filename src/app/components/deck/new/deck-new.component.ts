import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DeckService } from '../../../services/deck/deck.service';

@Component({
  selector: 'app-deck-new',
  templateUrl: './deck-new.component.html',
  styleUrls: ['./deck-new.component.css'],
  providers: [ DeckService ]
})
export class DeckNewComponent implements OnInit {
  newDeck: any = {
    id: '',
    name: '',
    color: {
      green: false,
      red: false,
      black: false,
      blue: false,
      white: false
    },
    isMyDeck: false,
    records: []
  };

  constructor(private _deckService: DeckService, private _router: Router) { }

  ngOnInit() {
  }

  onChangeColor(event) {
    const name = event.srcElement.attributes.name.nodeValue;
    this.newDeck.color[name] = event.currentTarget.checked;
    console.log(this.newDeck);
  };

  onChangeIsMydeck(event) {
    this.newDeck.isMyDeck = event.currentTarget.checked;
  };

  onClickSubmit() {
    if (this.newDeck.name === '') { return; }
    this.newDeck.id = new Date().getTime().toString(16) + Math.floor(10000 * Math.random()).toString(16);
    this._deckService.create(this.newDeck);
    this._router.navigate(['']);
  };
}
