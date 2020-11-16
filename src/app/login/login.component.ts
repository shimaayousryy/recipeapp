import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms'
import {Router} from "@angular/router"
import {AuthService} from "../auth.service"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor( private _AuthService:AuthService , private _Router:Router) { }

  logInForm:FormGroup;
  flag:boolean=false;

  logInInfo(logInForm){
    console.log(logInForm.value);

    if(logInForm.valid == true){
      this._AuthService.login(logInForm.value).subscribe( (data) =>{
        
      if(data.message == 'success'){
        this._AuthService.saveUserData(data.user.first_name, data.user.last_name , data.user.email ,data.user.taken )
        this._Router.navigate(['/recipe'])
      }else{
        this.flag=true;
      }
      })

    }

  }

  
  ngOnInit(): void {

    this.logInForm = new FormGroup({
      'email' : new FormControl(null , [Validators.email , Validators.required]  ),
      'password' : new FormControl(null ,[ Validators.required , Validators.pattern(/[a-z0-9]/)])
    })
   }

}
