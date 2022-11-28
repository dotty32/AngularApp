import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
Messages:{
  id:string;
  userName:string;
  message:string;
  date:string;
}[]=[];
  constructor() { }

  ngOnInit(): void {
    this.GetAll()
  }
GetAll(){
  
}
deleteitem(id:string){
  
}
}
