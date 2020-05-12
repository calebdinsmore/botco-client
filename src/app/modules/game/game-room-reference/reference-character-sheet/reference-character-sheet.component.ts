import { Component, OnInit, Input, OnChanges, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CharacterSetEnum } from 'src/app/core/services/room/dto/enum/character-set.enum';
import * as _ from 'lodash';
import { CharacterDto } from 'src/app/core/services/room/dto/character.dto';
import { StaticGameDataDto } from 'src/app/core/services/room/dto/static-game-data.dto';
import { RoomService } from 'src/app/core/services/room/room.service';
import { Subscription } from 'rxjs';
import { CharacterTypeEnum } from 'src/app/core/services/room/dto/enum/character-type.enum';

@Component({
  selector: 'app-reference-character-sheet',
  templateUrl: './reference-character-sheet.component.html',
  styleUrls: ['./reference-character-sheet.component.less'],
})
export class ReferenceCharacterSheetComponent implements OnInit, OnChanges, OnDestroy {
  @Input() characterSet: CharacterSetEnum;
  staticGameData: StaticGameDataDto;
  characters: CharacterDto[];
  townsfolk: CharacterDto[];
  outsiders: CharacterDto[];
  minions: CharacterDto[];
  demons: CharacterDto[];

  private subs = new Subscription();
  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.subs.add(
      this.roomService.getStaticGameData().subscribe((data) => {
        this.staticGameData = data;
        if (this.characterSet) {
          this.setupCharacters();
        }
      })
    );
  }

  ngOnChanges() {
    if (this.characterSet && this.staticGameData) {
      this.setupCharacters();
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private setupCharacters() {
    this.characters = _.find(this.staticGameData.characterSets, (x) => x.setName === this.characterSet)?.characters;
    this.townsfolk = this.characters.filter((x) => x.characterType === CharacterTypeEnum.Townsfolk);
    this.outsiders = this.characters.filter((x) => x.characterType === CharacterTypeEnum.Outsider);
    this.minions = this.characters.filter((x) => x.characterType === CharacterTypeEnum.Minion);
    this.demons = this.characters.filter((x) => x.characterType === CharacterTypeEnum.Demon);
  }
}
