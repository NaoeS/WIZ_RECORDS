import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DeckService } from '../../../services/deck/deck.service';

@Component({
  selector: 'app-deck-edit',
  templateUrl: './deck-edit.component.html',
  styleUrls: ['./deck-edit.component.css'],
  providers: [ DeckService ]
})
export class DeckEditComponent implements OnInit {
  deck: any;

  constructor(private _deckService: DeckService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .subscribe(params => {
        this.deck = this._deckService.find(params['id']);
      });
  }

  onChangeColor(event) {
    const name = event.srcElement.attributes.name.nodeValue;
    this.deck.color[name] = event.currentTarget.checked;
    console.log(this.deck);
  };

  onChangeIsMydeck(event) {
    this.deck.isMyDeck = event.currentTarget.checked;
  };

  onClickEdit() {
    if (this.deck.name === '') { return; }
    this._deckService.edit(this.deck);
    this._router.navigate(['/deck/index']);
  };
}
