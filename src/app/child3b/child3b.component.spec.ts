import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child3bComponent } from './child3b.component';

describe('Child3bComponent', () => {
  let component: Child3bComponent;
  let fixture: ComponentFixture<Child3bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child3bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child3bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
