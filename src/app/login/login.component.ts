import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  operation: string = 'login'
  email: string = null
  password: string = null
  nick: string = null

  constructor(private authenticationService: AuthenticationService, private userService: UserService, private router:Router) { }

  ngOnInit() {}

  login() {
    this.authenticationService.loginWithEmail(this.email, this.password).then(
      onfullfiled => {
        console.log("Entro")
        console.log(onfullfiled)
        this.router.navigate(['home'])
      }).catch(
        onrejected => {
          console.log("Error")
          console.log(onrejected)
        })
  }

  register() {
    this.authenticationService.registerWithEmail(this.email, this.password).then(
      onfullfiled => {
        const user = {
          uid: onfullfiled.user.uid,
          email: this.email,
          nick: this.nick
        }
        this.userService.createUser(user).then(
          onfullfiled => {
            console.log("Registrado")
            console.log(onfullfiled)
          }).catch(
            onrejected => {
              console.log("Registrado")
              console.log(onrejected)
            }
          )
      }).catch(
        onrejected => {
          console.log("Error")
          console.log(onrejected)
        })
  }

}
