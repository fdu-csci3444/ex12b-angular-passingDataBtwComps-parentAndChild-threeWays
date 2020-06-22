import { Component, OnInit } from '@angular/core';

import { Child3Service } from '../services/child3.service';

@Component({
  selector: 'app-child3a',
  templateUrl: './child3a.component.html',
  styleUrls: ['./child3a.component.scss']
})
export class Child3aComponent implements OnInit {
  names: string[];
  nameSelected: string;

  names4b: string[];
  names4c: string[];

  constructor(private child3servce: Child3Service) {
    child3servce.observable2subject2names4a().subscribe((data) => {this.names = data;});
    child3servce.observable2subject2names4b().subscribe((data) => {this.names4b = data;});
    child3servce.observable2subject2names4c().subscribe((data) => {this.names4c = data;});
  }

  ngOnInit(): void {
  }

  onNameClicked(value4name: string) {
    this.nameSelected = value4name;
    this.child3servce.publish2subject2nameSelected4a(value4name);
  }
}
