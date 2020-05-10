import { Subscription } from 'rxjs';
import { AppStorageService } from './../../../core/services/app-storage/app-storage.service';
import { RoomService } from './../../../core/services/room/room.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateRoomDto } from 'src/app/core/services/room/dto/create-room.dto';
import { AppStorageKeysEnum } from 'src/app/core/services/app-storage/app-storage-keys-enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less'],
})
export class LandingComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  constructor(private roomService: RoomService, private appStorage: AppStorageService, private router: Router) {}

  ngOnInit() {
    this.subs.add(
      this.roomService.getRoom().subscribe((room) => {
        if (room.id) {
          this.router.navigate(['room', room.id]);
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  createRoom(formValue: { username: string }) {
    this.roomService.createRoom(formValue.username);
  }

  joinRoom(formValue: { username: string; roomCode: string }) {
    this.roomService.joinRoom(formValue.username, formValue.roomCode.toUpperCase());
  }
}
