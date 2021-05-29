import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpservice: HttpService) {}
  accessToken=localStorage.getItem('accessToken');
  options = {
    headers:new HttpHeaders ({
      'x-access-token':this.accessToken?? "",
      'Content-Type':'application/json',
      'accept':'application/json'

    })
   }
  login(data:any){
    return this.httpservice.post('admin/login',data,"");
  }
  addbook(data : any){
    return this.httpservice.post('admin/add/book',data,this.options);
  }
  getBooks(){
    return this.httpservice.get('get/book',this.options);
    
  }
}

