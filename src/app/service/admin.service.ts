import { Injectable } from '@angular/core';
import { AdminLogin } from '../models/admin-login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    private baseUrl:string="http://localhost:8080/Quiz/AdminLogin"
    constructor(private http:HttpClient) { }
   newUser(ad:AdminLogin):Observable<AdminLogin>       
   {
  return this.http.post<AdminLogin>(`${this.baseUrl}`,ad);
   } 
   login(ad:AdminLogin):Observable<AdminLogin> 
   {
  return this.http.get<AdminLogin>(`${this.baseUrl}`+"/"+ad.emailid+"/"+ad.password);
   }

}
