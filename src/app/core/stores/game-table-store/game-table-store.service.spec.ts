import { TestBed } from '@angular/core/testing';

import { GameTableStoreService } from './game-table-store.service';

describe('GameTableStoreService', () => {
  let service: GameTableStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameTableStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
