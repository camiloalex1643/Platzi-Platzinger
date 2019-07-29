import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

//Este servicio puede ser inyectado en cualquier otro componente
//Root indica que puede estar en cualquier componente
@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[]
  constructor() {
    let user1: User = {
      nick: 'alex1',
      age: 30,
      email: 'alex1@gmail.com',
      friend: true,
      uid: 1,
      status: 'online'
    }

    let user2: User = {
      nick: 'alex2',
      age: 31,
      email: 'alex2@gmail.com',
      friend: true,
      uid: 2,
      status: 'offline'
    }
    let user3: User = {
      nick: 'alex3',
      age: 32,
      email: 'alex3@gmail.com',
      friend: true,
      uid: 3,
      status: 'busy'
    }
    let user4: User = {
      nick: 'alex4',
      age: 33,
      email: 'alex4@gmail.com',
      friend: true,
      uid: 4,
      status: 'away'
    }
    this.friends = [user1, user2, user3, user4]
  }
  getFriends(){
    return this.friends
  }
}
