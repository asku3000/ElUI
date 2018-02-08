import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhomeComponent } from './userhome.component';

describe('UserhomeComponent', () => {
  let component: UserhomeComponent;
  let fixture: ComponentFixture<UserhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

<<<<<<< HEAD
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
=======
  it('should create', () => {
    expect(component).toBeTruthy();
  });
>>>>>>> f1f0ee57d3ea6efa6c876d51f52334bd9901f0bd
});
