import { Injectable } from '@angular/core';

const DECK_STORAGE_KEY = 'wizRecords.decks';

@Injectable()
export class DeckService {

  constructor() { }

  fetch(): any[] {
    return JSON.parse(localStorage.getItem(DECK_STORAGE_KEY)) || [];
  }

  fetchMyDecks(): any[] {
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

  createRecord(params: any, id: string) {
    const _deck = this.find(id);
    _deck.records = _deck.records || [];
    _deck.records.push(params);
    _deck.records = this._sortRecords(_deck.records);
    this.edit(_deck);
  }

  edit(params: any): void {
    this.delete(params.id);
    const items = this.fetch().concat(params);
    localStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(items));
  }

  editRecord(params: any, id: string, record_index: number): void {
    const _deck = this.find(id);
    _deck.records[record_index] = params;
    _deck.records = this._sortRecords(_deck.records);
    this.edit(_deck);
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

  deleteRecord(deck_id: string, record_index: number): void {
    const _deck = this.find(deck_id);
    _deck['records'].splice(record_index, 1);
    this.edit(_deck);
  }

  private _sortRecords(records: any[]) {
    if (!records) {
      return [];
    }
    return records.sort((a, b) => {
      return (a.date > b.date ? 1 : -1);
    });
  }
}
