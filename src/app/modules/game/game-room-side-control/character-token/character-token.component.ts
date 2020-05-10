import { CharacterDto } from './../../../../core/services/room/dto/character.dto';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-token',
  templateUrl: './character-token.component.html',
  styleUrls: ['./character-token.component.less'],
})
export class CharacterTokenComponent implements OnInit {
  @Input() character: CharacterDto;
  @Input() selectable = true;
  @Output() selectionChange = new EventEmitter<CharacterDto>();

  constructor() {}

  ngOnInit(): void {}

  selectCharacter() {
    if (this.selectable) {
      this.character._selected = !this.character._selected;
      this.selectionChange.emit(this.character);
    }
  }
}
