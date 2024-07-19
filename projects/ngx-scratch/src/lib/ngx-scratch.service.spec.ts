import { TestBed } from '@angular/core/testing';

import { NgxScratchService } from './ngx-scratch.service';

describe('NgxScratchService', () => {
  let service: NgxScratchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxScratchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
