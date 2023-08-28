import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { StarRatingComponent } from './components/starRating/starRating.component';
import { SelectCustomComponent } from './components/select-custom/select-custom.component';
import { DropdownRendererDirective } from './diretivas/dropdown-renderer.directive';


@NgModule({
  declarations: [SideMenuComponent, StarRatingComponent, SelectCustomComponent, DropdownRendererDirective],
  imports: [CommonModule, RouterModule],
  exports: [SideMenuComponent, StarRatingComponent, SelectCustomComponent, DropdownRendererDirective],
})
export class SharedModule {}
