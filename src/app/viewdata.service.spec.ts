import { TestBed, inject } from '@angular/core/testing';

import { ViewdataService } from './viewdata.service';

describe('ViewdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewdataService]
    });
  });

  it('should be created', inject([ViewdataService], (service: ViewdataService) => {
    expect(service).toBeTruthy();
  }));
});
