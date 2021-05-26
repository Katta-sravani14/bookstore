import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {AdminService} from 'src/app/services/adminservice/admin.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,private adminservice:AdminService) {
    this.form = this.formBuilder.group({

      bookname : ['', [Validators.required]],
      Authorname : ['',[Validators.required]],
      Description : [' ', [Validators.required]],
      Quantity : ['',[Validators.required]],
      Price : ['', [Validators.required]],
      Discount : ['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  }
submit(){
  if(this.form.valid){  
    console.log(this.form.value);
  }
  let reqObj = {
    bookname :this.form.value.bookname,
    author: this.form.value.Authorname,
    description : this.form.value.Description,
    quantity : this.form.value.Quantity,
    price : this.form.value.Price,
    discountPrice : this.form.value.Discount
  }
  console.log(reqobj);
  this.adminservice.addbook(reqObj.subscribe((res) =>{
    console.log(res);
  },
  (error) =>{
    console.log(error);
})

}
}

