import { TestBed, inject } from '@angular/core/testing';

import { RatingsServiceService } from './ratings-service.service';

describe('RatingsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatingsServiceService]
    });
  });


  // it('should be created', inject([RatingsServiceService], (service: RatingsServiceService) => {
  //   expect(service).toBeTruthy();
  // }));

});
