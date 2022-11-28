import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylesService {

  constructor() { }
  changestatus(){
    var element=document.getElementById("login");
    var element2=document.getElementById("logout")
    if(localStorage.getItem("token")!=null){
      element.style.display="none";
      element2.style.display="block";
    }
    else {
      element.style.display="block";
      element2.style.display="none";
    }
  }
  changestyleadmin(){
    var element=document.getElementById("admin")
    if (localStorage.getItem("token")==null){
      element.style.display="none";
    }
    else{
      if (JSON.parse(window.atob(localStorage.getItem("token").split(".")[1])).role=="Admin"){
          element.style.display="block";
      }
    }
  }
}
