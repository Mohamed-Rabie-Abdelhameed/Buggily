import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent {
  bugs: any[] = [];

  constructor(private api: ApiService, private snackbar: MatSnackBar, private router: Router) {
    this.fetchBugs();
  }

  onDelete(id: string) {
    this.snackbar.open(id, 'Dismiss', {
      duration: 2000,
      panelClass: ['green-snackbar'],
    });
    this.api.deleteBug(id).subscribe(() => {
      this.fetchBugs();
    });
  }

  fetchBugs() {
    this.api.getBugs().subscribe((data) => {
      this.bugs = data;
      console.log(this.bugs);
    });
  }

  onEdit(id: string) {
    this.router.navigate([`/edit/${id}`]);
  }
}
