import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  flag:boolean=false;
  constructor(private _AuthService:AuthService, public _Router:Router) { 
   
  }

registerFormInfo(registerForm){
if(registerForm.valid == true){
 this._AuthService.register(registerForm.value).subscribe( (data) =>{
   if(data.message == 'success'){
     this._Router.navigate(['/login']);
   }else{
     this.flag=true;
   }

 })
 
}

}


ngOnInit(): void {

this.registerForm=new FormGroup ({
'first_name' : new FormControl(null , [Validators.minLength(3) , Validators.maxLength(15) , Validators.required]  ),
'last_name' : new FormControl(null , [Validators.minLength(3) , Validators.maxLength(15) , Validators.required]  ),
'email' : new FormControl(null , [Validators.email , Validators.required]  ),
'password' : new FormControl(null ,[ Validators.required , Validators.pattern(/[a-z0-9]/)])

});

}

}

