import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module7RoutingModule } from './module7-routing.module';
import { Module7Component } from './module7.component';



@NgModule({
  imports: [
    CommonModule,
    Module7RoutingModule
  ],
  declarations: [Module7Component]
})
export class Module7Module { }
