import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainKeywordModalComponent } from './main-keyword-modal.component';

describe('MainKeywordModalComponent', () => {
  let component: MainKeywordModalComponent;
  let fixture: ComponentFixture<MainKeywordModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainKeywordModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainKeywordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
