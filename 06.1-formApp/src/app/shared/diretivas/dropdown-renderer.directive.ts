import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[toggleClass]'
})
export class DropdownRendererDirective {

  private wasInsideTheElement = false;
  @HostBinding('class.toggle') isOpen = false;

  constructor() {
  }

  @HostListener('click') toggleOpen(eventData: Event): void {
    this.isOpen = !this.isOpen;
    this.wasInsideTheElement = true;
  }

  @HostListener("document:click") clickOut(): void {
    if (!this.wasInsideTheElement) {
      this.isOpen = false;
    }
    this.wasInsideTheElement = false;
  }

}
