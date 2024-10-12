import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = "http://localhost:8080/user";
  constructor(private http: HttpClient) { }

  getDashboardSummary(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getSalesData() : Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
