import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from '../model/student';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkCallServiceService {
  apiUrl: string = 'https://ec2-13-203-197-194.projects.wecreateproblems.com/proxy/3000/students';

  constructor(private httpCall: HttpClient) {

  }
  addStudent(studentData: Student): Observable<any> {
    return this.httpCall.post(this.apiUrl, studentData);
  }
  viewById(id: any): Observable<any> {
    return this.httpCall.get(`${this.apiUrl}/${id}`);
  }
  viewAll(): Observable<any[]> {
    return this.httpCall.get<any[]>(this.apiUrl);
  }

  deleteById(id: string): Observable<any> {
    return this.httpCall.delete(`${this.apiUrl}/${id}`);
  }

}
