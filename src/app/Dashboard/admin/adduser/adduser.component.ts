import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private toaster:ToastrService,private router:Router) { }

  ngOnInit(): void {
 
  }
Submit(){
  this.toaster.success("Utilisateur Ajouté !")
}
}
