
import { RouterModule } from '@angular/router'; 
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'
import { UserPageComponent } from "./user-page/user-page.component";
import { HomePageComponent } from "./home-page/home-page.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';
}
