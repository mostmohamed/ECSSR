import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxActionComponent } from './inbox-action.component';

describe('InboxActionComponent', () => {
  let component: InboxActionComponent;
  let fixture: ComponentFixture<InboxActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboxActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
