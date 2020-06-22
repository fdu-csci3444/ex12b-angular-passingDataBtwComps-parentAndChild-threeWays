import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit, AfterViewInit {
  names: string[];
  nameSelected: string;

  // NOTE ilker below 2 used to access templateRef to a DOM element value in controller TS file
  @ViewChild('child2templateRef2input') templateRef2input: ElementRef;
  templateRef2inputValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.templateRef2inputValue = this.templateRef2input.nativeElement.value;
  }

  onNameClicked(value4name: string) {
    this.nameSelected = value4name;
  }

}
