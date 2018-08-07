import { Component, OnInit } from '@angular/core';
import {MovielistService} from '../services/movies.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private myService: MovielistService,
  ) { }

  ngOnInit() {
    // this.getAllTheMovies();

  }

  // getAllTheMovies() {
  //   console.log('getting the movies');
  //   console.log(this.allTheMovies);
  //   this.myService.getAllMovies()
  //   .subscribe((theList) => {
  //     this.allTheMovies = theList;
  //     console.log('movies are: ', this.allTheMovies);
  //   });

  }

