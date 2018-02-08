import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderhomeComponent } from './providerhome.component';

describe('ProviderhomeComponent', () => {
  let component: ProviderhomeComponent;
  let fixture: ComponentFixture<ProviderhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

});
