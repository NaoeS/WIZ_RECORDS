import { Injectable } from '@angular/core';

const DECK_STORAGE_KEY = 'decks';

@Injectable()
export class DeckService {

  constructor() { }

  fetch(): Array<any> {
    return JSON.parse(localStorage.getItem(DECK_STORAGE_KEY)) || [];
  }

  fetchMyDecks(): Array<any> {
    const items = this.fetch();
    const filteredItems = items.filter((_item) => {
      return _item.isMyDeck === true;
    });

    return filteredItems;
  }

  create(params: any): void {
    const items = this.fetch().concat(params);
    localStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(items));
  }

  edit(params: any): void {
    this.delete(params.id);
    const items = this.fetch().concat(params);
    localStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(items));
  }

  find(id: string): any {
    const items = this.fetch();
    const findedItem = items.filter((_item) => {
      return _item.id === id;
    });

    return findedItem[0];
  }

  delete(id: string): void {
    const items = this.fetch();
    const filteredItems = items.filter((_item) => {
      return _item.id !== id;
    });

    localStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(filteredItems));
  }
}
