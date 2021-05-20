import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { LoginComponent } from './login/login.component';



// import { AdminComponent } from './bookstore/admin/admin.component';
// import { GetallnoteComponent } from './components/getallnote/getallnote.component';
// import { TrashComponent } from './components/trash/trash.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { DisplayComponent } from './display/display.component';
// import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


const routes: Routes = [
 
   
     
      {
        path: 'login',
        component : LoginComponent
      },
      
      {
        path: 'header',
        component : HeaderComponent
      },
      
     
    ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
