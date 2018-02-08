import { TestBed, inject } from '@angular/core/testing';

import { DashboarduserserviceService } from './dashboarduserservice.service';

import { HttpClientModule } from "@angular/common/http";
import {HttpModule} from '@angular/http';
describe('DashboarduserserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboarduserserviceService],
      imports:[HttpClientModule,HttpModule]
    });
  });

  it('should be created', inject([DashboarduserserviceService], (service: DashboarduserserviceService) => {
    expect(service).toBeTruthy();
  }));

});
