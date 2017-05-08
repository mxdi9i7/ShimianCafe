import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { 
    console.log('Posts are successfully rendered')
  }

  //get all posts from the API
  getAllTucaoPosts() {
    return this.http.get('http://localhost:3000/api/tucaoPosts')
      .map(res => res.json())
  }

  //create a new post
  // addPost() {
  //   return this.http.post('http://localhost:3000/api/newpost')
  //   .map(res => res.json())
  // }
}
