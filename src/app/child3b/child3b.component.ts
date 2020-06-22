import { Component, OnInit } from '@angular/core';
import { Child3Service } from '../services/child3.service';

@Component({
  selector: 'app-child3b',
  templateUrl: './child3b.component.html',
  styleUrls: ['./child3b.component.scss']
})
export class Child3bComponent implements OnInit {
  names: string[];
  nameSelected: string;

  constructor(private child3servce: Child3Service) {
    child3servce.observable2subject2names4b().subscribe((data) => {this.names = data;});
  }

  ngOnInit(): void {
  }

  onNameClicked(value4name: string) {
    this.nameSelected = value4name;
    this.child3servce.publish2subject2nameSelected4b(value4name);
  }
}
