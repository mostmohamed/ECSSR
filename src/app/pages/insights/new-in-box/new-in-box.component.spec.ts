import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInBoxComponent } from './new-in-box.component';

describe('NewInBoxComponent', () => {
  let component: NewInBoxComponent;
  let fixture: ComponentFixture<NewInBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewInBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
