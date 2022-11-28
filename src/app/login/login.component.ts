import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StylesService } from '../Services/styles.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private toaster:ToastrService,private router:Router,private status:StylesService) { }
  ngOnInit(): void {
  }
register(){
this.toaster.success("Registration effectuée !")
}
login(){
this.toaster.success("Logged In !")
localStorage.setItem("token","1")
}
}
