import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  textSearch!: string;
  setTextSearch(search: string) {
    this.textSearch = search;
  }
  getTextSearch() {
    return this.textSearch;
  }
}
