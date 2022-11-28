import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AdduserComponent } from './Dashboard/admin/adduser/adduser.component';
import { AdminComponent } from './Dashboard/admin/admin.component';
import { EdituserComponent } from './Dashboard/admin/edituser/edituser.component';
import { MessagesComponent } from './Dashboard/admin/messages/messages.component';
import { AddComponent } from './forum/add/add.component';
import { ForumComponent } from './forum/forum.component';
import { AuthGuard } from './Guard/auth.guard';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
{path:"login",component:LoginComponent},
{path:"forum",component:ForumComponent},
{path:"admin",component:AdminComponent,canActivate:[AuthGuard]},
{path:"admin/edituser/:id",component:EdituserComponent,canActivate:[AuthGuard]},
{path:"admin/adduser",component:AdduserComponent,canActivate:[AuthGuard]},
{path:"forum/add",component:AddComponent},
{path:"contact",component:ContactComponent},
{path:"admin/messages",component:MessagesComponent,canActivate:[AuthGuard]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
