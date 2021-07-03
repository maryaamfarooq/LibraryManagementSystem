import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostLoginService } from './post-login.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StudentComponent } from './student/student.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ManagerComponent } from './manager/manager.component';
import { AddBookComponent } from './add-book/add-book.component';
import { IssueRequestComponent } from './issue-request/issue-request.component';
import { SendRequestComponent } from './send-request/send-request.component';
// import { LocalStorageModule } from 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    StudentComponent,
    SupplierComponent,
    ManagerComponent,
    AddBookComponent,
    IssueRequestComponent,
    SendRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
