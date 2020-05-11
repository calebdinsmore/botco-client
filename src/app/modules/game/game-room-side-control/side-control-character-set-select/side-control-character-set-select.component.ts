import { Component, OnInit, OnDestroy } from '@angular/core';
import { StaticGameDataDto } from 'src/app/core/services/room/dto/static-game-data.dto';
import { Subscription } from 'rxjs';
import { RoomService } from 'src/app/core/services/room/room.service';
import { CharacterSetDto } from 'src/app/core/services/room/dto/character-set.dto';

@Component({
  selector: 'app-side-control-character-set-select',
  templateUrl: './side-control-character-set-select.component.html',
  styleUrls: ['./side-control-character-set-select.component.less'],
})
export class SideControlCharacterSetSelectComponent implements OnInit {
  selectedSet: CharacterSetDto;

  constructor(public roomService: RoomService) {}

  ngOnInit(): void {}

  selectSet(charSet: CharacterSetDto) {
    this.selectedSet = charSet;
  }
}
