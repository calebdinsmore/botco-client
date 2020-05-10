import { Subscription } from 'rxjs';
import { MapSchema } from '@colyseus/schema';
import { GameStateDto } from './../../../core/services/room/dto/game-state.dto';
import { RoomService } from './../../../core/services/room/room.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerDto } from 'src/app/core/services/room/dto/player.dto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.less'],
})
export class GameRoomComponent implements OnInit, OnDestroy {
  players: PlayerDto[] = [];

  private subs = new Subscription();
  constructor(public roomService: RoomService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.subs.add(
      this.roomService.getState().subscribe((state) => {
        this.players = [];
        for (const key in state.players) {
          if (state.players.hasOwnProperty(key)) {
            this.players.push(state.players[key]);
          }
        }
        this.players.sort((a, b) => {
          return a.seatNumber - b.seatNumber;
        });
      })
    );

    this.subs.add(
      this.route.params.subscribe((params) => {
        if (params.id) {
          if (!this.roomService.isConnected) {
            this.roomService.attemptReconnect(params.id).then((success) => {
              if (!success) {
                this.router.navigate(['']);
              }
            });
          }
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
