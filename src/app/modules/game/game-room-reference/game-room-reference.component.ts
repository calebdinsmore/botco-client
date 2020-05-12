import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/core/services/room/room.service';
import { CharacterSetEnum } from 'src/app/core/services/room/dto/enum/character-set.enum';

@Component({
  selector: 'app-game-room-reference',
  templateUrl: './game-room-reference.component.html',
  styleUrls: ['./game-room-reference.component.less'],
})
export class GameRoomReferenceComponent implements OnInit {
  show = false;
  characterSetEnum = CharacterSetEnum;

  constructor(public roomService: RoomService) {}

  ngOnInit(): void {}

  open() {
    this.show = true;
  }
}
