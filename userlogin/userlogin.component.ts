import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../../app/services/userservice/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  hide = true;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,  private userService: UserserviceService,private router:Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
      //fullName: ['', Validators.required],
      //phoneNumber: ['', Validators.required]
      
    });
  }
  ngOnInit(): void {
  }


register() {
  if (this.form.valid) {
    console.log(this.form.value);
    let array=[]as any
    let reqObj = {
      fullName: this.form.value.fullName,
      email: this.form.value.email,
      password: this.form.value.password,
      phone: this.form.value.phoneNumber
    }

    this.userService.signup(reqObj).subscribe((res) => {
      console.log(res)
        array=res

    }, (error) => {
      console.log(error);
    })
  }
}

login() {
  if (this.form.valid) {
    console.log(this.form.value);

  }
  let array=[]as any
  let reqObj = {
    email: this.form.value.email,
    password: this.form.value.password
  }

  this.userService.login(reqObj).subscribe((res: any) => {
    console.log(res);
    localStorage.setItem("access",array.result.accessToken);
    this.router.navigate(['/userdashboard']);
  }, (error) => {
    console.log(error);
  })
}
}
