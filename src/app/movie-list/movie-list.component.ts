import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MoviedetailsService } from '../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  allTheMovies: Array<any> = [];
  pattern: any;

  constructor(
    private myService: MoviedetailsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllTheMovies();
  }

  getAllTheMovies() {
    console.log('getting the products');
    console.log(this.allTheMovies);
    this.myService.getAllMovies()
    .subscribe((theList) => {
      this.allTheMovies = theList;
      console.log('products are: ', this.allTheMovies);
    }); 
  }

}
