import { AppService } from './core/services/app/app.service';
import { AppStorageService } from './core/services/app-storage/app-storage.service';
import { Component, OnInit } from '@angular/core';
import { AppStorageKeysEnum } from './core/services/app-storage/app-storage-keys-enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'BotCO';

  constructor() {}
}
