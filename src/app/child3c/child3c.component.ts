import { Component, OnInit } from '@angular/core';
import { Child3Service } from '../services/child3.service';

@Component({
  selector: 'app-child3c',
  templateUrl: './child3c.component.html',
  styleUrls: ['./child3c.component.scss']
})
export class Child3cComponent implements OnInit {
  names: string[];
  nameSelected: string;

  constructor(private child3servce: Child3Service) {
    child3servce.observable2subject2names4c().subscribe((data) => {this.names = data;});
  }

  ngOnInit(): void {
  }

  onNameClicked(value4name: string) {
    this.nameSelected = value4name;
    this.child3servce.publish2subject2nameSelected4c(value4name);
  }
}
