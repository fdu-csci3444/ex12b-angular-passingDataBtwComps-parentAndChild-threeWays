import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Child3Service {
  subject2names4a = new Subject<string[]>();
  subject2nameSelected4a = new Subject<string>();

  subject2names4b = new Subject<string[]>();
  subject2nameSelected4b = new Subject<string>();

  subject2names4c = new Subject<string[]>();
  subject2nameSelected4c = new Subject<string>();

  constructor() { }

  clear2subject2names4a(): void {
    this.subject2names4a.next();
  }

  publish2subject2names4a(value4names4a: string[]): void {
    this.subject2names4a.next(value4names4a);
  }
  observable2subject2names4a(): Observable<string[]> {
    return this.subject2names4a.asObservable();
  }
  publish2subject2nameSelected4a(value4nameSelected4a: string): void {
    this.subject2nameSelected4a.next(value4nameSelected4a);
  }
  observable2subject2nameSelected4a(): Observable<string> {
    return this.subject2nameSelected4a.asObservable();
  }

  publish2subject2names4b(value4names4b: string[]) {
    this.subject2names4b.next(value4names4b);
  }
  observable2subject2names4b(): Observable<string[]> {
   return this.subject2names4b.asObservable();
  }
  publish2subject2nameSelected4b(value4nameSelected4b: string) {
    this.subject2nameSelected4b.next(value4nameSelected4b);
  }
  observable2subject2nameSelected4b(): Observable<string> {
    return this.subject2nameSelected4b.asObservable();
  }

  publish2subject2names4c(value4names4c: string[]) {
    this.subject2names4c.next(value4names4c);
  }
  observable2subject2names4c(): Observable<string[]> {
    return this.subject2names4c.asObservable();
  }
  publish2subject2nameSelected4c(value4nameSelected4c: string) {
    this.subject2nameSelected4c.next(value4nameSelected4c);
  }
  observable2subject2nameSelected4c(): Observable<string> {
    return this.subject2nameSelected4c.asObservable();
  }
}
