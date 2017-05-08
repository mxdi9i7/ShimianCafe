
import { RouterModule } from '@angular/router'; 
import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component'
import { UserPageComponent } from "./pages/user-page/user-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';
}
