import { TestBed } from '@angular/core/testing';

import { GameStateHelperService } from './game-state-helper.service';

describe('GameStateHelperService', () => {
  let service: GameStateHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameStateHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
