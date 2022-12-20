import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynonymsModalComponent } from './synonyms-modal.component';

describe('SynonymsModalComponent', () => {
  let component: SynonymsModalComponent;
  let fixture: ComponentFixture<SynonymsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynonymsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynonymsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
