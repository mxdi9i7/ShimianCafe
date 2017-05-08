import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../../components/post/post.component';
import { Post } from '../../models/post'
import { PostsService } from '../../service/posts.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  
  posts: Post[];
  postBody: string;
  postAuthor: string;
  created_at: string;
  
  constructor(private tucaoPostsService: PostsService, private router: Router) { 
    //Retrieve posts from the API
      this.tucaoPostsService.getAllTucaoPosts().subscribe(posts => {
        this.posts = posts
      })
  }


addPost(event) {
    event.preventDefault();
    var time = new Date();
    var newPost = {
      body: this.postBody,
      author: this.postAuthor,
      created_at: time.toString(),
      view_count: 123,
      like_count: 111
    }

    this.tucaoPostsService.addTucaoPost(newPost)
    .subscribe(post => {
      this.posts.push(post)
      this.router.navigate(['/'], {})
    })
  }

}
