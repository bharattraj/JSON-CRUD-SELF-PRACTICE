import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './compoenent/add-student/add-student.component';
import { ViewByIdComponent } from './compoenent/view-by-id/view-by-id.component';
import { ViewAllComponent } from './compoenent/view-all/view-all.component';

const routes: Routes = [
  { path: "", redirectTo: 'addStudent', pathMatch: 'full' },
  { path: 'addStudent', component: AddStudentComponent },
  { path: 'viewById/:id', component: ViewByIdComponent },
  {path: 'viewAll', component: ViewAllComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
