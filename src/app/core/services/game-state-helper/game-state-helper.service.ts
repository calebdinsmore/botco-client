import { MapSchema } from '@colyseus/schema';
import { PlayerDto } from 'src/app/core/services/room/dto/player.dto';
import { GameStateDto } from 'src/app/core/services/room/dto/game-state.dto';
import { Subscription } from 'rxjs';
import { Room } from 'colyseus.js';
import { RoomService } from './../room/room.service';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameStateHelperService {
  constructor() {}

  mapSchemaAsArray<T>(map: MapSchema<T>) {
    const array: T[] = [];
    if (map) {
      for (const id in map) {
        if (map.hasOwnProperty(id)) {
          array.push(map[id] as T);
        }
      }
    }
    return array;
  }

  playersAsArray(state: GameStateDto): PlayerDto[] {
    return this.mapSchemaAsArray<PlayerDto>(state.players);
  }

  currentPlayer(room: Room<GameStateDto>): PlayerDto {
    if (room.state) {
      if (room.sessionId === room.state.storyteller?.playerId) {
        return room.state.storyteller;
      }
      return room.state.players[room.sessionId];
    }
  }

  playerHasUnreadChats(room: Room<GameStateDto>) {
    if (room) {
      const player = this.currentPlayer(room);
      return this.countMapSchemaUsingCallback(player?.chatRooms, (x) => x.hasUnread) > 0;
    }
    return false;
  }

  getPlayer(state: GameStateDto, playerId: string) {
    if (playerId === state.storyteller?.playerId) {
      return state.storyteller;
    }
    if (state?.players) {
      return state.players[playerId];
    }
  }

  getPlayerToBeExecuted(state: GameStateDto): PlayerDto | undefined {
    if (state?.votingSchema?.playerToBeExecutedId) {
      return state.players[state.votingSchema?.playerToBeExecutedId];
    }
  }

  playerCount(state: GameStateDto) {
    if (state) {
      return Object.keys(state.players).length;
    }
  }

  livingPlayerCount(state: GameStateDto) {
    return this.countMapSchemaUsingCallback(state?.players, (x) => !x.inactive && !x.isDead);
  }

  myPlayerId(room: Room<GameStateDto>) {
    return room?.sessionId;
  }

  isStoryteller(room: Room<GameStateDto>) {
    return room?.state?.storyteller?.playerId === room.sessionId;
  }

  votesNeededToExecute(state: GameStateDto) {
    if (state.votingSchema?.votesToExecute) {
      return state.votingSchema.votesToExecute + 1;
    }
    return Math.round(this.livingPlayerCount(state) / 2);
  }

  votesAvailable(state: GameStateDto) {
    return this.countMapSchemaUsingCallback(state?.players, (x) => x.canVote && !x.inactive);
  }

  totalHandsRaised(state: GameStateDto) {
    return this.countMapSchemaUsingCallback(state?.players, (x) => x.handRaised);
  }

  countMapSchemaUsingCallback<T>(map: MapSchema<T>, fn: (x: T) => boolean) {
    let count = 0;
    if (map) {
      for (const id in map) {
        if (map.hasOwnProperty(id)) {
          if (fn(map[id])) {
            count++;
          }
        }
      }
    }
    return count;
  }
}
