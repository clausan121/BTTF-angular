import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { MovielistService } from '../services/movies.service';
import { AuthService } from '../services/auth.service'
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  user: any;

  theMovie: any = {};

  theUpdates: any = {};

  constructor(
    private myService: MovielistService,
    private myAuth: AuthService ,
    private route: ActivatedRoute,
    private myRouter: Router
   ) { }

   getTheMovie(id) {
    this.myService.getOneMovie(id)
    .subscribe((responseFromService) => {
      this.theMovie = responseFromService;
    });
  }

updateTheMovie(idOfMovie) {
  this.myService.updateMovie(idOfMovie, this.theUpdates)
  .subscribe(() => {
      this.getTheMovie(idOfMovie);
      this.theUpdates = {};
  });

}

  ngOnInit() {
    console.log('user in prod details component', this.user);


    this.myAuth.isLoggedIn();


    this.myAuth.currentUser
    .subscribe((theUser) => {
      console.log('user in movie details component', theUser);
      this.user = theUser;
    });
  

    this.route.params
    .subscribe((theParams) => {
      const theID = theParams.id;
      this.getTheMovie(theID);
    });
  }

  // addComment(comment, user) {
  //   const data = {movieId: movie._id, userId: user._id};
  //   console.log('what is data in component: ', data);
  //   this.myAuth.sendToComments(data)
  //   .toPromise()
  //   .then(() => {

  //     this.myRouter.navigate(['/user', user._id, 'comment' ]);

  //   })
  //   .catch( err => {
  //     console.log('err in addToComments: ', err);
  //   } );
  //   // console.log("product is: ", product)
  // }

}
