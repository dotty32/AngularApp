import { Component, OnInit } from '@angular/core';
import { UsersForAdmin } from 'src/app/Models/users-for-admin';
import { StylesService } from 'src/app/Services/styles.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
Users:UsersForAdmin[]=[];
  constructor(private status:StylesService) { }

  ngOnInit(): void {
this.status.changestyleadmin();
  }
}
