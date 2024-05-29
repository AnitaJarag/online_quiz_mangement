import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Addmcq } from '../models/addmcq';

@Injectable({
  providedIn: 'root'
})
export class AddmcqService {
  newUser(q: Addmcq) {
    throw new Error('Method not implemented.');
  }
  
private baseUrl:string="http://localhost:8080/Quiz/question"
  constructor(private http:HttpClient) { }
  newAddmcq(A:Addmcq):Observable<Addmcq>
{
    return this.http.post<Addmcq>(`${this.baseUrl}`,A);
  }
  getAll():Observable<Addmcq[]>
  {
    return this.http.get<Addmcq[]>(`${this.baseUrl}`);
   }
getAllLang(lang:any):Observable<Addmcq[]>
{
  return this.http.get<Addmcq[]>(`${this.baseUrl}/`+lang);
}
}
