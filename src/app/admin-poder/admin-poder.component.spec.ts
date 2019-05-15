import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPoderComponent } from './admin-poder.component';

describe('AdminPoderComponent', () => {
  let component: AdminPoderComponent;
  let fixture: ComponentFixture<AdminPoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
