import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 



//services
import {  PostsService } from './service/posts.service';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { PostComponent } from './components/post/post.component';
import { TucaoPageComponent } from './pages/tucao-page/tucao-page.component';
import { PostButtonComponent } from './components/post-button/post-button.component';
import { NewPostComponent } from './pages/new-post/new-post.component';





const ROUTES = [
  {
    path: '',
    redirectTo: 'tucao',
    pathMatch: 'full'
  },
  {
    path: 'newpost',
    component: NewPostComponent
  },
  {
    path: 'tucao',
    component: TucaoPageComponent
  },
  {
    path: 'posts',
    component: HomePageComponent
  },
  {
    path: 'user',
    component: UserPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    UserPageComponent,
    PostComponent,
    TucaoPageComponent,
    PostButtonComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
