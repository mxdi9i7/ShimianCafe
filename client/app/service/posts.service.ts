import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { 
    console.log('Posts are successfully rendered')
  }

  //get all posts from the API
  getAllPosts() {
    return this.http.get('http://localhost:3000/api/posts')
      .map(res => res.json())
  }
}
