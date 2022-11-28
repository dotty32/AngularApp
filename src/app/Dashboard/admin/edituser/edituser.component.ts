import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersForAdmin } from 'src/app/Models/users-for-admin';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
userid:string="";
  constructor(private route:ActivatedRoute,private toaster:ToastrService,private router:Router) { }

  async ngOnInit(): Promise<void> {
this.GetUserById()
  }
Update(){
this.toaster.success("Utilisateur Modifiée !")
}
GetUserById(){
this.route.paramMap.subscribe({
  next:(res:any)=>{
   this.userid=res.params.id;
  }
})
}
Delete(){
this.toaster.success("Utilisateur Supprimé !")
}
}
