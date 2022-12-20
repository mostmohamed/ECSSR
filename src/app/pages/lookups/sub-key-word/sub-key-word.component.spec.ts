import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubKeyWordComponent } from './sub-key-word.component';

describe('SubKeyWordComponent', () => {
  let component: SubKeyWordComponent;
  let fixture: ComponentFixture<SubKeyWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubKeyWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubKeyWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
