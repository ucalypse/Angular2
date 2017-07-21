import { Component } from '@angular/core';

export class Member{
  name: string;
  rank: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title : 'In Yo Face';
  leader : Member = {
    name: "whoa",
    rank:1
  }
}
