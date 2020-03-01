import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiWpComponent } from './api-wp.component';

describe('ApiWpComponent', () => {
  let component: ApiWpComponent;
  let fixture: ComponentFixture<ApiWpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiWpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiWpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
