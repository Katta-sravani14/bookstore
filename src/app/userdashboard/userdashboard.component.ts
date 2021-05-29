import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/adminservice/admin.service';
//import { DialogComponent } from '../../app/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UserserviceService } from '../../app/services/userservice/userservice.service';


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss']
})
export class UserdashboardComponent implements OnInit {


  bookArray = [] as any
  constructor(public dialog: MatDialog, private admin: AdminService, private userService: UserserviceService) { }




  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    let arr = [] as any;
    this.admin.getBooks().subscribe((res) => {
      console.log(res);
      arr = res;
      console.log(arr.result);
      this.bookArray = arr.result;
    }, (error) => {
      console.log(error);
    })
  }

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Low to High ' },
    { value: 'pizza-1', viewValue: 'High to Low' },
    { value: 'tacos-2', viewValue: 'Newest Arrivals' }
  ];

addToCart(data: any){
  console.log(data);
  let reqObj = {
  }
  this.userService.addToCart(reqObj).subscribe((res) => {
    console.log(res);
  }, (error) => {
    console.log(error);
  })
}

Wishlist(data: any){
  console.log(data);
  let reqObj = {
  }
  console.log(data);
  this.userService.Wishlist(reqObj).subscribe((res) => {
    console.log(res);
  }, (error) => {
    console.log(error);
  })
}
}



