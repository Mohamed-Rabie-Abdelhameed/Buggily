import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl =
    'https://buggily-51fdb-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {}

  createBug(bug: Bug) {
    this.http
      .post<{
        title: string;
        description: string;
        status: string;
        priority: string;
        createdBy: string;
        createdDate: Date;
        assignedTo: string;
        resolvedDate: Date;
      }>(this.apiUrl+"bugs.json", bug)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  getBugs() {
    return this.http.get<{ [key: string]: Bug }>(this.apiUrl+"bugs.json").pipe(
      map((responseData) => {
        const bugsArray: Bug[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            bugsArray.push({ ...responseData[key], id: key });
          }
        }
        return bugsArray;
      })
    );
  }

  deleteBug(id: string) {
    return this.http.delete(this.apiUrl + "bugs/" + id + '.json');
  }

  updateBug(id:string ,bug: Bug) {
    return this.http.patch(this.apiUrl + "bugs/" + id + '.json', bug).subscribe();
  }

  getBug(id: string) {
    return this.http.get<Bug>(this.apiUrl + "bugs/" + id + '.json');
  }
}
