import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { StarRatingComponent } from './components/starRating/starRating.component';

@NgModule({
  declarations: [SideMenuComponent, StarRatingComponent],
  imports: [CommonModule, RouterModule],
  exports: [SideMenuComponent, StarRatingComponent],
})
export class SharedModule {}
