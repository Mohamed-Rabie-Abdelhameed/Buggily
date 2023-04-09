import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private apiUrl = 'https://buggily-51fdb-default-rtdb.firebaseio.com/bugs.json';

  constructor(private http: HttpClient) {}

 createBug(bug: Bug) {
  this.http.post<{
    title: string;
    description: string;
    status: string;
    createdBy: string;
    createdDate: Date;
    assignedTo: string;
    resolvedDate: Date;
  }>(this.apiUrl, bug).subscribe((responseData) => {
    console.log(responseData);
  });
}

}
