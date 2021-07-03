import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StudentComponent} from './student/student.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ManagerComponent } from './manager/manager.component';
import { AddBookComponent } from './add-book/add-book.component';
import { IssueRequestComponent } from './issue-request/issue-request.component';
import { SendRequestComponent } from './send-request/send-request.component'

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'student', component: StudentComponent},
  {path: 'supplier', component: SupplierComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'issue-request', component: IssueRequestComponent},
  {path: 'send-request', component: SendRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
