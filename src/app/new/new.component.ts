import { Component, ViewChild } from '@angular/core';
import { Bug } from '../models/Bug';
import { ApiService } from '../services/api.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent {
  constructor(private api: ApiService, private snackBar: MatSnackBar, private location: Location) {}

  @ViewChild('addForm') addForm!: NgForm;



  onAddBug(bug: {
    title: string;
    description: string;
    status: string;
    createdDate: Date;
    assignedTo: string;
    resolvedDate: Date;
  }) {
    var newBug: Bug = {
      title: bug.title,
      description: bug.description,
      status: bug.status,
      createdDate: new Date(),
      assignedTo: bug.assignedTo,
      resolvedDate: new Date(),
    };
    this.api.createBug(newBug);
    this.openSnackBar('Bug added', 'Close');
    this.addForm.reset();
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['green-snackbar'],
    });
  }

  onCancel() {
    this.location.back();
  }
}
