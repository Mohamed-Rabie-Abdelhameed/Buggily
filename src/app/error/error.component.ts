import { Component, OnInit } from '@angular/core';

declare var particlesJS: any; 

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit{

  constructor() { }

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/data/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
}
