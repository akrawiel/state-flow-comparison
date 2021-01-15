import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import {todoReducer} from './todo.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ todo: todoReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
