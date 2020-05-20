import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoinOptionsDto } from 'src/app/core/services/room/dto/join-options.dto';
import { RoomService } from 'src/app/core/services/room/room.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.less'],
})
export class JoinComponent implements OnInit, OnDestroy {
  roomId: string;
  private subs = new Subscription();
  constructor(public route: ActivatedRoute, private roomService: RoomService, private router: Router) {}

  ngOnInit(): void {
    this.subs.add(
      this.route.params.subscribe((params) => {
        if (params.id) {
          this.roomId = params.id;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  joinRoom(formValue: { username: string; spectator: boolean }) {
    const options = {
      username: formValue.username,
      spectator: formValue.spectator,
    } as JoinOptionsDto;
    this.roomService.joinRoom(this.roomId.toUpperCase(), options).then((room) => {
      if (room) {
        this.router.navigate(['room', room.id]);
      }
    });
  }
}
