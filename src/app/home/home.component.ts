import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends: User[];
  buscarAmigo: string = ''
  //Variable globable, no es necesario inicializarlo
  
  constructor(private userService: UserService) {

    /*let c: number = 1
    let b: number = 2
    let d: boolean = true
    let l : any[] = [1, 'aoe', {}, []]
    console.log(c+b)*/

    userService.getUsers().valueChanges().subscribe(
      (next:User[] )=> {
        this.friends = next;
        console.log(this.friends);
      },
      error => {
        console.log("Error en hom.component.ts"+error)
      }
    )
  }

  ngOnInit() {
  }
}