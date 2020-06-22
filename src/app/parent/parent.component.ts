import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Child2Component } from '../child2/child2.component';

import { Child3Service } from '../services/child3.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {
  namesList4child1 = ['bir', 'iki', 'uc', 'dort'];
  nameFromChild1: string;

  namesList4child2Str = 'uno,dos,tres,quatro';
  namesList4child2 = this.namesList4child2Str.split(',');
  nameFromChild2: string;
  templateRef2inputValueFromChild2: string;
  @ViewChild(Child2Component) private viewChild4child2: Child2Component;

  namesList4child3aStr = 'eins,zwei,drei,funf';
  nameFromChild3a: string;

  namesList4child3bStr = 'sagligina,cheers,slange,nasdarovje';
  nameFromChild3b: string;

  namesList4child3cStr = 'aymisun,gunesmisun,oy oy,emine';
  nameFromChild3c: string;

  constructor(private child3service: Child3Service) {
    this.child3service.observable2subject2nameSelected4a().subscribe((data) => {this.nameFromChild3a = data;});
    this.child3service.observable2subject2nameSelected4b().subscribe((data) => {this.nameFromChild3b = data;});
    this.child3service.observable2subject2nameSelected4c().subscribe((data) => {this.nameFromChild3c = data;});
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.onClickButton4pass_namesList4child2Str_to_child2(this.namesList4child2Str);
  }

  onNameEEemitFromChild1(event) {
    this.nameFromChild1 = event;
  }

  onClickButton4pass_namesList4child2Str_to_child2(str: string) {
    this.namesList4child2 = str.split(',');
    this.viewChild4child2.names = this.namesList4child2;
  }
  onClickButton4get_nameSelected_from_child2() {
    this.nameFromChild2 = this.viewChild4child2.nameSelected;
    // this.templateRef2inputValueFromChild2 = this.viewChild4child2.templateRef2inputValue;  // WRONG - NOTE ilker, will NOT get values entered to input afterwards
    this.templateRef2inputValueFromChild2 = this.viewChild4child2.templateRef2input.nativeElement.value;
  }

  publish2subject2names4a(str: string) {
    this.namesList4child3aStr = str;
    this.child3service.publish2subject2names4a(str.split(','));
  }

  publish2subject2names4b(str: string) {
    this.namesList4child3bStr = str;
    this.child3service.publish2subject2names4b(str.split(','));
  }

  publish2subject2names4c(str: string) {
    this.namesList4child3cStr = str;
    this.child3service.publish2subject2names4c(str.split(','));
  }

  publish2subject2names4a4b4c(str4a: string, str4b: string, str4c: string) {
    this.publish2subject2names4a(str4a);
    this.publish2subject2names4b(str4b);
    this.publish2subject2names4c(str4c);
  }
}
