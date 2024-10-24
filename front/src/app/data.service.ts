import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  createColumn(columnTitle: string) {
    console.log(columnTitle);
    this.http.get<any>('http://localhost:8000/api/getCards').subscribe((res)=>{
      console.log(res);
    });
  }

  
}
