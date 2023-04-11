import { Component, OnInit, ViewChild } from '@angular/core';
import { Bug } from '../models/Bug';
import { ApiService } from '../services/api.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

declare var particlesJS: any;

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  constructor(
    private api: ApiService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {}

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/data/particles.json', function () {
      console.log('callback - particles.js config loaded');
    });
  }

  @ViewChild('addForm') addForm!: NgForm;

  onAddBug(bug: {
    title: string;
    description: string;
    status: string;
    priority: string;
    createdDate: Date;
    assignedTo: string;
    resolvedDate: Date;
  }) {
    var newBug: Bug = {
      title: bug.title,
      description: bug.description,
      status: bug.status,
      priority: bug.priority,
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
