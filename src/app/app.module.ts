import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddStudentComponent } from './compoenent/add-student/add-student.component';
import { ViewByIdComponent } from './compoenent/view-by-id/view-by-id.component';
import { ViewAllComponent } from './compoenent/view-all/view-all.component';
import { DeleteByIdComponent } from './compoenent/delete-by-id/delete-by-id.component';
// import { ViewAllComponent } from './component/view-all/view-all.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ViewByIdComponent,
    ViewAllComponent,
    DeleteByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
