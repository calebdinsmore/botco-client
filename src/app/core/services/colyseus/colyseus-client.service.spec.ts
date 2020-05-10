import { TestBed } from '@angular/core/testing';

import { ColyseusClientService } from './colyseus-client.service';

describe('ColyseusClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColyseusClientService = TestBed.get(ColyseusClientService);
    expect(service).toBeTruthy();
  });
});
