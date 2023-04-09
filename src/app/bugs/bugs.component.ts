import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent {
  bugs: any[] = [];

  // constructor(private api: ApiService) {
  //   this.api.getBugs().subscribe((data) => {
  //     this.bugs = data;
  //     console.log(this.bugs);
  //   });
  // }


}
