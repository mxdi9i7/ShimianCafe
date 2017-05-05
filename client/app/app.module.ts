import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 



//services
import {  PostsService } from './service/posts.service';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PostComponent } from './post/post.component';
import { TucaoPageComponent } from './tucao-page/tucao-page.component';



const ROUTES = [
  {
    path: '',
    redirectTo: 'tucao',
    pathMatch: 'full'
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
    TucaoPageComponent
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
