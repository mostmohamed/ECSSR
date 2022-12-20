import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainKeyWordComponent } from './main-key-word.component';

describe('MainKeyWordComponent', () => {
  let component: MainKeyWordComponent;
  let fixture: ComponentFixture<MainKeyWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainKeyWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainKeyWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
