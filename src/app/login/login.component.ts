import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/adminservice/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private adminservice: AdminService,private route:Router) {

    // create our form group with all the inputs we will be using in the template
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    let array=[]as any
      let request = {

        email: this.form.value.email,
        password: this.form.value.password
      }
      this.adminservice.login(request).subscribe((res) => {
        console.log(res)
        array=res
        localStorage.setItem('accessToken',array.result.accessToken)
      },(error) => {
          console.log(error)
        }
      )
      this.route.navigate(['/dashboard'])
    }
   
  }

  ngOnInit(): void {
  }

}
