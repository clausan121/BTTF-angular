import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

currentUser: BehaviorSubject<string> = new BehaviorSubject(null);
temporaryUser: any;
baseUrl: string = environment.apiUri;

  constructor( private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`${this.baseUrl}/api/signup`, user)
      .map(res => {
      res.json();
      })
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`${this.baseUrl}/api/login`, user, { withCredentials: true })
      .map(res => {
        this.currentUser.next(res.json());
        res.json();
      })
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.baseUrl}/api/logout`, { withCredentials: true })
      .map(res => {
        this.currentUser.next(null);
        res.json();
      })
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${this.baseUrl}/api/loggedin`, { withCredentials: true })
      .map(res => {
        console.log('loggedin being called', res);
        this.temporaryUser = res;
        this.currentUser.next(JSON.parse(this.temporaryUser._body));
        console.log('user in service: ', this.currentUser);
    })
      .catch(this.handleError);
  }

  commentInfo(dataToSend) {
    return this.http.post(`${this.baseUrl}/api/creditinfo`, dataToSend, { withCredentials: true })
    .map(res => {
      console.log('heyyyyy: ', res);
       res.json();
      })
    .catch(this.handleError);
  }

  getTheComments() {
    return this.http.get(`${this.baseUrl}/api/comments`, { withCredentials: true })
    .map(res => res.json())
    .catch(this.handleError);
  }

  sendToComments(dataToSend) {
    console.log('whattt: ', dataToSend);
    return this.http.post(`${this.baseUrl}/api/comments`, dataToSend, { withCredentials: true })
    .map(res => {
      console.log('commentssss: ', res);
       res.json();
      })
    .catch(this.handleError);
  }

  getTheCommentContent(userId) {
    return this.http.get(`${this.baseUrl}/api/user/${userId}/comments`, { withCredentials: true })
    .map(res => res.json())
    .catch(this.handleError);
  }
  removeComment(moviesId) {
    console.log('data to send: ', moviesId.moviesId);
    return this.http.post(`${this.baseUrl}/api/cart/${prodId.prodId}/delete`, prodId, { withCredentials: true })
    .map(res => {
      console.log('commentsssss: ', res);
       res.json();
      })
    .catch(this.handleError);
  }

}
