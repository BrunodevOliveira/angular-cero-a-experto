import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: [],
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input() price: number = 0;

  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('Component Filho: ngOnInit');

    this.interval$ = interval(1000).subscribe((value) => {
      console.log(`Tick: ${value}`);
    });

    // window.addEventListener(() => {})
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Component Filho: ngOnChanges', { changes });
  }
  ngOnDestroy(): void {
    console.log('Component Filho: ngOnDestroy');
    this.interval$?.unsubscribe();

    // window.removeEventListener()
  }
}
