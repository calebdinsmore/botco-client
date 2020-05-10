import { LocalStorageService } from './../local-storage/local-storage.service';
import { AppStorageKeysEnum } from './app-storage-keys-enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppStorageService {
  constructor(private localStorageService: LocalStorageService) {}

  getString(key: AppStorageKeysEnum) {
    return this.localStorageService.getString(key);
  }

  getObject(key: AppStorageKeysEnum) {
    return this.localStorageService.getObject(key);
  }

  set<T>(key: AppStorageKeysEnum, value: T) {
    this.localStorageService.set(key, value);
  }
}
