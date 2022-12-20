import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubKeywordModalComponent } from './sub-keyword-modal.component';

describe('SubKeywordModalComponent', () => {
  let component: SubKeywordModalComponent;
  let fixture: ComponentFixture<SubKeywordModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubKeywordModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubKeywordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
