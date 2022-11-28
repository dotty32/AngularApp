import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Forum } from 'src/app/Models/forum.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  Posts:Forum[]=[];
  content:string="";
  subject:string="";
  Post:Forum;
  constructor(private toaster:ToastrService,private router:Router) { }
  ngOnInit(): void {
    this.Posts=JSON.parse(localStorage.getItem("posts"));
  } 
  submit(){
    this.Post={
      content:this.content,
      posts:"2",
      subject:this.subject,
      userid:"1234",
      created:new Date().toISOString(),
      userName:"Mohamed"
    }
   this.Posts.push(this.Post);
  localStorage.setItem("posts",JSON.stringify(this.Posts))
  this.router.navigate(["forum"])
  }
}
