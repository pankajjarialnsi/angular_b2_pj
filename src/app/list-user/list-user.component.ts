import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';
import { AddColorDirective } from './add-color.directive'; 
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
 users = {};
 extra = 'Bumrah';
  constructor(private playerService: PlayersService) {
  	this.users = playerService.getPlayers();
  }

  ngOnInit() {
  }

}
