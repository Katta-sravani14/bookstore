import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../../../app/services/httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpService: HttpService) { }
  accessToken=localStorage.getItem('accessToken');
  options = {
    headers:new HttpHeaders ({
      'x-access-token':this.accessToken?? "",
      'Content-Type':'application/json',
      'accept':'application/json'

    })
}

signup(data : any){
  return this.httpService.post('registration', data, '');
}

login(data : any){
  return this.httpService.post('login', data, '');
}
addToCart( data : any){
  return this.httpService.post( 'add_to_cart',data,'');
}
Wishlist( data : any){
  return this.httpService.post( 'Wishlist', data,'');
}
}
