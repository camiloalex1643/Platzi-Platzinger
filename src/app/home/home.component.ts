import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  friends: User[];
  buscarAmigo: string = ''
  //Variable globable, no es necesario inicializarlo

  constructor(private userService: UserService, private authenticationService: AuthenticationService, private router: Router) {

    /*let c: number = 1
    let b: number = 2
    let d: boolean = true
    let l : any[] = [1, 'aoe', {}, []]
    console.log(c+b)*/

    this.authenticationService.getStatus().subscribe(
      next => {
        this.userService.getUserById(next.uid).valueChanges().subscribe(
          (next: User) => {
            this.user = next
            console.log(this.user)
          }, error => {
            console.log(error)
          }
        )
      },
      error => {
        console.log(error)
      }
    )

    userService.getUsers().valueChanges().subscribe(
      (next: User[]) => {
        this.friends = next;
        console.log(this.friends);
      },
      error => {
        console.log("Error en hom.component.ts" + error)
      }
    )
  }

  ngOnInit() {
  }
  logout() {
    this.authenticationService.logOut().then(
      (onfullfiled) => {
        alert('Logout exitoso')
        this.router.navigate(['login'])
      }).catch((onrejected) => {
        console.log(onrejected)
      }
      )
  }
}