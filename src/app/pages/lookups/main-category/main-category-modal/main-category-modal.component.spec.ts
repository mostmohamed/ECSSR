import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCategoryModalComponent } from './main-category-modal.component';

describe('MainCategoryModalComponent', () => {
  let component: MainCategoryModalComponent;
  let fixture: ComponentFixture<MainCategoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCategoryModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
