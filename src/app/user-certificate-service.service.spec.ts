import { TestBed, inject } from '@angular/core/testing';

import { UserCertificateServiceService } from './user-certificate-service.service';

describe('UserCertificateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCertificateServiceService]
    });
  });

  // it('should be created', inject([UserCertificateServiceService], (service: UserCertificateServiceService) => {
  //   expect(service).toBeTruthy();
  // }));
});
