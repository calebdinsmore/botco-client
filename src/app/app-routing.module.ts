import { GameRoomComponent } from './modules/game/game-room/game-room.component';
import { GameModule } from './modules/game/game.module';
import { LandingComponent } from './modules/home/landing/landing.component';
import { HomeModule } from './modules/home/home.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'room/:id', component: GameRoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule, GameModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
