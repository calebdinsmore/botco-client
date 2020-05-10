import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Client } from 'colyseus.js';

@Injectable({
  providedIn: 'root',
})
export class ColyseusClientService extends Client {
  constructor() {
    super(environment.apiUrl);
  }
}
