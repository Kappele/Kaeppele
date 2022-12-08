import { TestBed } from '@angular/core/testing';
import { error } from 'does/not/exist';

import { CountdownService } from './countdown.service';

describe('CountdownService', () => {
  let service: CountdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
