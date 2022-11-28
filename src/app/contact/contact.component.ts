import { leadingComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
  }
submit(){
this.toaster.success("Message Envoyé !")
}
}
