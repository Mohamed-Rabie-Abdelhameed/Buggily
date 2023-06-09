import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Bug } from '../models/Bug';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

declare var particlesJS: any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  constructor(private api: ApiService, private snackBar: MatSnackBar,private location:Location, private route: ActivatedRoute) {}
  @ViewChild('editForm') editForm!: NgForm;

  id!: string;
  current: Bug;
  ngOnInit() {
    this.populateForm();
    particlesJS.load('particles-js', 'assets/data/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }

  onEditBug(bug: {
    id: string;
    title: string;
    description: string;
    status: string;
    priority: string;
    createdDate: Date;
    assignedTo: string;
    resolvedDate: Date;
  }){
    this.api.updateBug(this.id, bug);
    this.openSnackBar('Bug updated', 'Close');
    this.onCancel();
  }

  onCancel() {
    this.location.back();
  }

 

  populateForm(){
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.api.getBug(this.id).subscribe((data) => {
      this.current = data;
      this.editForm.setValue({
        title: this.current.title,
        description: this.current.description,
        priority: this.current.priority,
        status: this.current.status,
        assignedTo: this.current.assignedTo,
      });
    }); 
  }
  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.duration = 3000; 
    config.panelClass = ['green-snackbar'];
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'center';
    this.snackBar.open(message, action, config);
  }
}
