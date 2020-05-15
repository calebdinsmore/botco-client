import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getString(key: string) {
    return localStorage.getItem(key);
  }

  getObject(key: string) {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }

    return undefined;
  }

  set<T>(key: string, value: T) {
    localStorage.setItem(key, value.toString());
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
