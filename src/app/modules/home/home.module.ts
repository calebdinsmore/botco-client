import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { JoinComponent } from './join/join.component';

@NgModule({
  declarations: [LandingComponent, JoinComponent],
  imports: [SharedModule],
  exports: [LandingComponent],
})
export class HomeModule {}
