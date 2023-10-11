import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosMaterialModule } from './todos-material.module';

@NgModule({
    imports: [
        CommonModule,
        TodosRoutingModule,
        TodosMaterialModule
    ],
    declarations: [],
    providers: [],
})
export class TodosModule { }
