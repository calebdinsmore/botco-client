import { GameRoomComponent } from './modules/game/game-room/game-room.component';
import { GameModule } from './modules/game/game.module';
import { LandingComponent } from './modules/home/landing/landing.component';
import { HomeModule } from './modules/home/home.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoinComponent } from './modules/home/join/join.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'room/:id', component: GameRoomComponent },
  { path: 'join/:id', component: JoinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule, GameModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
