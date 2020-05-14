import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getString(key: string) {
    return sessionStorage.getItem(key);
  }

  getObject(key: string) {
    if (sessionStorage.getItem(key)) {
      return JSON.parse(sessionStorage.getItem(key));
    }

    return undefined;
  }

  set<T>(key: string, value: T) {
    sessionStorage.setItem(key, value.toString());
  }

  remove(key: string) {
    sessionStorage.removeItem(key);
  }

  clear() {
    sessionStorage.clear();
  }
}
