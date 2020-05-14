import { ChangePlayerCharacterPayloadDto } from './../../../core/services/room/dto/commands/in-game/change-player-character-payload.dto';
import { CharacterDto } from './../../../core/services/room/dto/character.dto';
import { StaticGameDataDto } from './../../../core/services/room/dto/static-game-data.dto';
import { RoomService } from './../../../core/services/room/room.service';
import { Subscription } from 'rxjs';
import { PlayerDto } from 'src/app/core/services/room/dto/player.dto';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { CommandsEnum } from 'src/app/core/services/room/dto/commands/commands.enum';
import { CharacterSetEnum } from 'src/app/core/services/room/dto/enum/character-set.enum';

@Component({
  selector: 'app-game-room-set-player-character-dialog',
  templateUrl: './game-room-set-player-character-dialog.component.html',
  styleUrls: ['./game-room-set-player-character-dialog.component.less'],
})
export class GameRoomSetPlayerCharacterDialogComponent implements OnInit {
  show = false;
  staticGameData: StaticGameDataDto;
  characterSet: CharacterSetEnum;
  characters: CharacterDto[] = [];
  player: PlayerDto;
  selectedCharacter: CharacterDto;

  private subs = new Subscription();
  constructor(public roomService: RoomService) {}

  ngOnInit(): void {
    this.subs.add(
      this.roomService.getState().subscribe((state) => {
        this.characterSet = state.characterSet;
      })
    );
    this.subs.add(
      this.roomService.getStaticGameData().subscribe((data) => {
        this.staticGameData = _.cloneDeep(data);
        if (this.staticGameData?.characterSets && this.characterSet) {
          const charSet = _.find(this.staticGameData.characterSets, (x) => x.setName === this.characterSet);
          if (charSet) {
            this.characters = charSet.characters;
          }
        }
      })
    );
  }

  open(player: PlayerDto) {
    this.player = player;
    this.selectCharacter(player.character);
    this.show = true;
  }

  selectionChange(character: CharacterDto) {
    this.selectCharacter(character);
  }

  selectCharacter(character: CharacterDto) {
    this.selectedCharacter = character;
    _.find(this.characters, (x) => x.name === this.selectedCharacter.name)._selected = true;
    this.characters
      .filter((x) => x.name !== character.name)
      .forEach((notCharacter) => {
        notCharacter._selected = false;
      });
  }

  cancel() {
    this.show = false;
  }

  save() {
    this.roomService.sendCommand(CommandsEnum.ChangePlayerCharacter, {
      key: 'confirmChangeCharacter',
      playerId: this.player.playerId,
      characterName: this.selectedCharacter.name,
      characterSet: this.characterSet,
    } as ChangePlayerCharacterPayloadDto);
    this.show = false;
  }
}
