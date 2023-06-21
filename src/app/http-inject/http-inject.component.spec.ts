import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpInjectComponent } from './http-inject.component';

describe('HttpInjectComponent', () => {
  let component: HttpInjectComponent;
  let fixture: ComponentFixture<HttpInjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpInjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
