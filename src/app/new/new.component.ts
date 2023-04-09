import { Component, ViewChild } from '@angular/core';
import { Bug } from '../models/Bug';
import { ApiService } from '../services/api.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent {
  constructor(private api: ApiService, private snackBar: MatSnackBar) {}

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
      createdDate: bug.createdDate,
      assignedTo: bug.assignedTo,
      resolvedDate: bug.resolvedDate,
    };
    this.api.createBug(newBug);
    this.snackBar.open('Bug added!', 'Close', {
      duration: 2000,
    });
    console.log(this.addForm.value);
  }

}
