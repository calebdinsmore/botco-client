import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [SharedModule],
  exports: [LandingComponent],
})
export class HomeModule {}
