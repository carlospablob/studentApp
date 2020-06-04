import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {studentReducer} from './reducers/student.reducer';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { TableComponent } from './components/table/table.component';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TableComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ students: studentReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    MaterialModule
  ],
  providers: [],
  entryComponents: [
    RegisterComponent,
    DetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
