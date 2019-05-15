import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAvengerComponent } from './admin-avenger.component';

describe('AdminAvengerComponent', () => {
  let component: AdminAvengerComponent;
  let fixture: ComponentFixture<AdminAvengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAvengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAvengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
