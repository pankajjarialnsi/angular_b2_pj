import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PlayersService {

 players = {};

  constructor() { }

  getPlayers(players:{}){

  	return this.players = {
  		count:3, 
  		data:[
			{ fname: 'Rohit' , lname: 'Sharma', playing:1 } , 
			{ fname: 'Shikhar' , lname: 'Dhawan', playing:1 } , 
			{ fname: 'Virat' , lname: 'Kohli', playing:0 }
  		]
  	};

  }

}
