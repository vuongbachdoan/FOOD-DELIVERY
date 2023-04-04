import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistRestaurantComponent } from './regist-restaurant.component';

describe('RegistRestaurantComponent', () => {
  let component: RegistRestaurantComponent;
  let fixture: ComponentFixture<RegistRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
