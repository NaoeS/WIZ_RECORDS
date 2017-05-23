import { Injectable } from '@angular/core';

const DECK_STORAGE_KEY = 'decks';

@Injectable()
export class DeckService {

  constructor() { }

  fetch(): Array<any> {
      return JSON.parse(localStorage.getItem(DECK_STORAGE_KEY)) || [];
  }

  create(params: any): void {
      const items = this.fetch().concat(params);
      localStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(items));
  }
}
