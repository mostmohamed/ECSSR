import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTypesModalComponent } from './news-types-modal.component';

describe('NewsTypesModalComponent', () => {
  let component: NewsTypesModalComponent;
  let fixture: ComponentFixture<NewsTypesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsTypesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsTypesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
