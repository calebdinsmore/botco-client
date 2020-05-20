import { Subscription, combineLatest } from 'rxjs';
import { RoomService } from './../../../core/services/room/room.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerDto } from 'src/app/core/services/room/dto/player.dto';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';

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
    const paramsStream = combineLatest([this.route.params, this.route.queryParams]);
    this.subs.add(
      paramsStream.subscribe(([routeParams, queryParams]) => {
        if (routeParams.id && !this.roomService.isConnected) {
          console.log(routeParams.id, queryParams.sessionId);
          this.roomService.attemptReconnect(routeParams.id, queryParams.sessionId).then((success) => {
            if (!success) {
              this.router.navigate(['']);
            }
          });
        }
      })
    );

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
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
