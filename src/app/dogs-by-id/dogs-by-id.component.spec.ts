import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsByIdComponent } from './dogs-by-id.component';

describe('DogsByIdComponent', () => {
  let component: DogsByIdComponent;
  let fixture: ComponentFixture<DogsByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
