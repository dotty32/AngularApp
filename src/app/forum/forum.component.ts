import { Component, OnInit } from '@angular/core';
import { Forum } from '../Models/forum.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
Posts:Forum[]=[];
  constructor() { }

  ngOnInit(): void {
   
    this.GetAll()
  }
GetAll(){
  this.Posts=JSON.parse(localStorage.getItem("posts"));
}

}
