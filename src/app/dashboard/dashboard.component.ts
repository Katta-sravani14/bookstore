import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
 import { DialogComponent } from '../dialog/dialog.component';
 import { AdminService } from '../../app/services/adminservice/admin.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog,private adminService: AdminService ) { }
  bookArray = [] as any;
  openDialog() {
    this.dialog.open(DialogComponent);
}


  ngOnInit(): void {
  }

}
