import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';




@Injectable()
export class MoviedetailsService {
  baseUrl: string = environment.apiUri;

  getAllTheMovies(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private myHttp: Http) { }

  getAllMovies() {
    return this.myHttp.get(`${this.baseUrl}/product/products`)
    .map((responseFromApi) => responseFromApi.json());
  }

  getOneMovie(theID: string) {
    return this.myHttp.get(`${this.baseUrl}/product/products/${theID}`)
    .map((responseFromApi) => responseFromApi.json());
  }


 


  // updateMovie(theID, theUpdates) {
  //   return this.myHttp.post(`${this.baseUrl}/task/update/${theID}`, theUpdates)
  //   .map((responseFromApi) => responseFromApi.json());
  // }


}
