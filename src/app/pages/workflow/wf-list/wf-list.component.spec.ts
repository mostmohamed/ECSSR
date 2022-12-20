import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfListComponent } from './wf-list.component';

describe('WfListComponent', () => {
  let component: WfListComponent;
  let fixture: ComponentFixture<WfListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
