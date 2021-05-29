import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserloginComponent } from '../userlogin/userlogin.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog : MatDialog) { }
  
  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(UserloginComponent);

}
}
