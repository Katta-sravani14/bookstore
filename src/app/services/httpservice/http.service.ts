import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl=environment.baseurl;


  constructor(private http:HttpClient)
  {
   } 

 post(url:any,data:any,token:any){
  console.log(url, " http service");
   return this.http.post(this.baseurl+url,data,token);
 }
get(url:any,data:any){
  return this.http.get(this.baseurl+url);
}
}

