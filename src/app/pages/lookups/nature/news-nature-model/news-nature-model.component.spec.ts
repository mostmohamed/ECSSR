import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsNatureModelComponent } from './news-nature-model.component';

describe('NewsNatureModelComponent', () => {
  let component: NewsNatureModelComponent;
  let fixture: ComponentFixture<NewsNatureModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsNatureModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsNatureModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
