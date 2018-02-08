import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing' 
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http'
import { UserService } from "../user.service";
import { UserLogin } from "../UserLogin";
import { ProviderUserService } from "../providerUser.service";

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent],
      imports:[RouterTestingModule,HttpClientModule],
      providers:[UserService,ProviderUserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
