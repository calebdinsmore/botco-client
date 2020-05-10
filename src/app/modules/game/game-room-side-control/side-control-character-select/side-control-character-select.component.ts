import { CharacterDto } from './../../../../core/services/room/dto/character.dto';
import { StaticGameDataDto } from './../../../../core/services/room/dto/static-game-data.dto';
import { Subscription } from 'rxjs';
import { RoomService } from './../../../../core/services/room/room.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import { ConfirmationService } from 'primeng/api';
import { CommandsEnum } from 'src/app/core/services/room/dto/commands/commands.enum';
import { SetCharactersDto } from 'src/app/core/services/room/dto/commands/pre-game/set-characters.dto';
import { CharacterTypeEnum } from 'src/app/core/services/room/dto/enum/character-type.enum';

@Component({
  selector: 'app-side-control-character-select',
  templateUrl: './side-control-character-select.component.html',
  styleUrls: ['./side-control-character-select.component.less'],
})
export class SideControlCharacterSelectComponent implements OnInit, OnDestroy {
  staticGameData: StaticGameDataDto;
  characters: CharacterDto[];
  townsfolk: CharacterDto[];
  outsiders: CharacterDto[];
  minions: CharacterDto[];
  demons: CharacterDto[];
  selectedTownsfolkCount = 0;
  selectedOutsiderCount = 0;
  selectedMinionCount = 0;
  selectedDemonCount = 0;
  warningsMap = new Map<string, string>();
  warningsArray: string[] = [];
  private subs: Subscription = new Subscription();

  constructor(public roomService: RoomService, private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.subs.add(
      this.roomService.getStaticGameData().subscribe((data) => {
        this.staticGameData = _.cloneDeep(data);
        if (this.staticGameData?.characterSets) {
          this.characters = this.staticGameData?.characterSets[0].characters;
          if (this.characters) {
            this.townsfolk = this.characters.filter((x) => x.characterType === CharacterTypeEnum.Townsfolk);
            this.outsiders = this.characters.filter((x) => x.characterType === CharacterTypeEnum.Outsider);
            this.minions = this.characters.filter((x) => x.characterType === CharacterTypeEnum.Minion);
            this.demons = this.characters.filter((x) => x.characterType === CharacterTypeEnum.Demon);
          }
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'This will lock the room to new players. Do you want to proceed?',
      accept: () => {
        this.sendSetCharactersCommand();
      },
    });
  }

  sendSetCharactersCommand() {
    const characterNames: string[] = [];
    const includeReminderTokensFor: string[] = [];
    for (const character of this.characters) {
      if (character._selected) {
        if (character.name === 'Drunk') {
          includeReminderTokensFor.push(character.name);
        } else {
          characterNames.push(character.name);
        }
      }
    }
    this.roomService.sendCommand(CommandsEnum.SetCharacters, {
      characterNames,
      includeReminderTokensFor,
    } as SetCharactersDto);
  }

  selectionChange() {
    this.selectedTownsfolkCount = this.townsfolk.filter((x) => x._selected).length;
    this.selectedOutsiderCount = this.outsiders.filter((x) => x._selected).length;
    this.selectedMinionCount = this.minions.filter((x) => x._selected).length;
    this.selectedDemonCount = this.demons.filter((x) => x._selected).length;

    this.warningsMap.clear();
    for (const char of this.characters.filter((x) => x._selected)) {
      console.log(char);
      if (char.setup) {
        switch (char.name) {
          case 'Drunk':
            this.warningsMap.set(
              'drunk',
              'When including the Drunk, make sure you also include an additional townsfolk (this is what will be given to the player).'
            );
            break;
          default:
            this.warningsMap.set(
              'default',
              'Your selection includes characters that augment role counts (e.g. +/- Outsiders). This tool does not automatically account for those augmentations; ensure that you enforce that logic.'
            );
        }
      }
    }
    this.warningsArray = [...this.warningsMap.values()];
  }
}
