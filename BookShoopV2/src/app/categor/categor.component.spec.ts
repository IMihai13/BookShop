import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorComponent } from './categor.component';

describe('CategorComponent', () => {
  let component: CategorComponent;
  let fixture: ComponentFixture<CategorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
