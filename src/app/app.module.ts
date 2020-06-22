import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3aComponent } from './child3a/child3a.component';
import { Child3bComponent } from './child3b/child3b.component';
import { Child3cComponent } from './child3c/child3c.component';

import { Child3Service } from './services/child3.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Child3aComponent,
    Child3bComponent,
    Child3cComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,      // NOTE ilker added to be able to use [(ngModel)] in components
    AppRoutingModule
  ],
  providers: [Child3Service], // NOTE ilker so that service is availiable to be injected into components
  bootstrap: [AppComponent]
})
export class AppModule { }
