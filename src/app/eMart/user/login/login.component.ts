import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  sign: string;
  errorMessage: string;

  constructor(protected emartService: EmartService,
              protected loginService: LoginService,
              protected router: Router) { }

  ngOnInit(): void {
    this.errorMessage = '';
  }
  validate(){
    if(this.sign == 'buyer'){
      let result = this.emartService.validateBuyer(this.username, this.password);
      if(result != null){
        this.loginService.loginBuyer(result);
        this.router.navigate(['item-list']);
      }
      else{
        this.errorMessage = "Invalid Username/Password";
      }
    }

    if(this.sign == 'seller'){
      let result = this.emartService.validateSeller(this.username, this.password);
      if(result != null){
        this.loginService.loginSeller(result);
        this.router.navigate(['item-list']);
      }
      else{
        this.errorMessage = "Invalid Username/Password";
      }
    }
  }
}
