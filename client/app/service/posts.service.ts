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
  addTucaoPost(newPost) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/newTucaoPost', JSON.stringify(newPost), {headers: headers})
    .map(res=> res.json())
 }
}
