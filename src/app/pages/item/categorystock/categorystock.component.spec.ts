import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorystockComponent } from './categorystock.component';

describe('CategorystockComponent', () => {
  let component: CategorystockComponent;
  let fixture: ComponentFixture<CategorystockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorystockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorystockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
