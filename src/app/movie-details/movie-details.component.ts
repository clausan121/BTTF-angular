import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {MovielistService} from '../services/movies.service'
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  constructor(
    private myService: MovielistService,
    private myRouter: Router
   ) { }

}