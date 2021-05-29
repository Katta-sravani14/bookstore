import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
//import { UserheaderComponent } from './userheader/userheader.component';
import { UserloginComponent } from './userlogin/userlogin.component';



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
      {
        path: 'footer',
        component : FooterComponent
      },
      {
        path: 'dashboard',
        component :DashboardComponent
      },
      {
        path: 'userlogin',
        component :UserloginComponent
      },
      {
        path: 'userdashboard',
        component : UserdashboardComponent
      },
      {
        path: 'order',
        component : OrderComponent
      },
      {
        path: 'orderdetails',
        component : OrderdetailsComponent
      },
      {
        
        path: "",
        redirectTo:"dashboard",
        pathMatch: "full"  
      
      },
    ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
