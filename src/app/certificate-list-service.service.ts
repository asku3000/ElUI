import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CertificateListServiceService {

  certificateUrl = 'https://educentralservicedev.azurewebsites.net/EduCentral/certificatesearch/';

  constructor(private httpClient: HttpClient) {
  }

  getCertificatesFromJson():Observable<any> {
    return this.httpClient.get(this.certificateUrl);
  }
}
