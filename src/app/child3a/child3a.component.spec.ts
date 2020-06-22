import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child3aComponent } from './child3a.component';

describe('Child3aComponent', () => {
  let component: Child3aComponent;
  let fixture: ComponentFixture<Child3aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child3aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
