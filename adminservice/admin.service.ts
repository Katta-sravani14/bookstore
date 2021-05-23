import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';




@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpservice: HttpService ) {}

  login(data:any){
    return this.httpservice.post('admin/login',data)
  }
}

