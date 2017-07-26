import { Component } from '@angular/core';

export class Member{
  name: string;
  rank: number;
  warStars: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title : 'In Yo Face';
  member : Member = {
    name: "whoa",
    rank:1,
    warStars:36
  }
}
