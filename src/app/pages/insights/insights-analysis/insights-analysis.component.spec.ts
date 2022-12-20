import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsAnalysisComponent } from './insights-analysis.component';

describe('InsightsAnalysisComponent', () => {
  let component: InsightsAnalysisComponent;
  let fixture: ComponentFixture<InsightsAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightsAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsightsAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
