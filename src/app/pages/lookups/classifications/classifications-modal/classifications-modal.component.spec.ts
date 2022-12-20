import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationsModalComponent } from './classifications-modal.component';

describe('ClassificationsModalComponent', () => {
  let component: ClassificationsModalComponent;
  let fixture: ComponentFixture<ClassificationsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassificationsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
