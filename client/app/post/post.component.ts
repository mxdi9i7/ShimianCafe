import { Component } from '@angular/core';
import { PostsService } from '../service//posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  //instantiate post to an empty array

  posts: any = [];

  constructor(private postsService: PostsService) { 
    //Retrieve posts from the API
      this.postsService.getAllPosts().subscribe(posts => {
        this.posts = posts
        console.log(posts)
      })
  }
     
}
