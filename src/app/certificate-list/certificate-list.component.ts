import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CertificateListServiceService } from "../certificate-list-service.service";

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.css']
})
export class CertificateListComponent implements OnInit {

  certificates: any = '';
  displayCertificates=null;
  displayCertificatesLength=0;
  name: string;
  found: boolean = true;
  constructor(private service: CertificateListServiceService) { }

  ngOnInit() {
    this.getCertificates();
  }

  getCertificates(): void {
    this.service.getCertificatesFromJson().subscribe(
      data => {
        this.certificates = data;
        this.displayCertificates = data;
        this.displayCertificatesLength = this.displayCertificates.length;
        this.found = false;
      });
  }

  filterCertificates() {
    var n: number;
    var cname;
    this.displayCertificates = this.certificates.filter((elem) => {
      cname = elem.certificateName.toUpperCase();
      n = cname.search(this.name.toUpperCase());

      if (n >= 0) {
        return elem;
      }
    })
    this.displayCertificatesLength = this.displayCertificates.length;
  }

}
