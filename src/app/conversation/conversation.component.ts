import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendId: any
  friend: User
  price: number = 78.565465465456456
  today: any = Date.now()

  //Inyectar ciertos elementos qeu deseamos utilizar en el componente
  //Con ActivatedRout podemos acceder a los elementos que estamos enviando o recibiendo
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    console.log(this.friendId)

    this.friendId = this.activatedRoute.snapshot.params['uid']
    console.log(this.friend)
    this.userService.getUserById(this.friendId).valueChanges().subscribe(
      (next:User )=> {
        this.friend = next
      },
      error => {
        console.log("Error")
      }
    )


  }
  ngOnInit() {
  }

}
