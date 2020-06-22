import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child3cComponent } from './child3c.component';

describe('Child3cComponent', () => {
  let component: Child3cComponent;
  let fixture: ComponentFixture<Child3cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child3cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child3cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
