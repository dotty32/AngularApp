import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HttpClient} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { ForumComponent } from './forum/forum.component';
import { AdminComponent } from './Dashboard/admin/admin.component';
import { EdituserComponent } from './Dashboard/admin/edituser/edituser.component';
import { AdduserComponent } from './Dashboard/admin/adduser/adduser.component';
import { AddComponent } from './forum/add/add.component';
import { ContactComponent } from './contact/contact.component';
import { MessagesComponent } from './Dashboard/admin/messages/messages.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ForumComponent,
    AdminComponent,
    EdituserComponent,
    AdduserComponent,
    AddComponent,
    ContactComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
