import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaetWFComponent } from './creaet-wf.component';

describe('CreaetWFComponent', () => {
  let component: CreaetWFComponent;
  let fixture: ComponentFixture<CreaetWFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaetWFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaetWFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
