import { TestBed, inject } from '@angular/core/testing';

import { CertificateListServiceService } from './certificate-list-service.service';

describe('CertificateListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CertificateListServiceService]
    });
  });

  // it('should be created', inject([CertificateListServiceService], (service: CertificateListServiceService) => {
  //   expect(service).toBeTruthy();
  // }));
});
