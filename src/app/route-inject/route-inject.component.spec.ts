import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteInjectComponent } from './route-inject.component';

describe('RouteInjectComponent', () => {
  let component: RouteInjectComponent;
  let fixture: ComponentFixture<RouteInjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteInjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
