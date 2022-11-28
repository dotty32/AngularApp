import { Component, OnInit } from '@angular/core';
import { Forum } from './Models/forum.model';
import { StylesService } from './Services/styles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 Posts:Forum[]=[];
  title = 'IT Plateforme';

  constructor(private status:StylesService) {    
  }
  ngOnInit(): void {
   this.status.changestatus();
   this.status.changestyleadmin();
   this.Posts.push({
    content:"A programming language is any set of rules that converts strings, or graphical program elements in the case of visual programming languages, to various kinds of machine code output.[citation needed] Programming languages are one kind of computer language, and are used in computer programming to implement algorithms.",
    posts:"4",
    subject:"Programming",
    userid:"1234",
   created:new Date().toISOString(),
   userName:"Mohamed"
  })
  localStorage.setItem("posts",JSON.stringify(this.Posts));
  }
}
