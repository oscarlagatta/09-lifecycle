import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: [
  ]
})
export class PriceComponent implements  OnInit, OnChanges, OnDestroy{

  @Input()
  public price: number = 0;

  public interval$?: Subscription;


  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    console.log('PriceComponent ngOnChanges');
  }

  ngOnInit(): void {
    console.log('PriceComponent ngOnInit');
    this.interval$ =
      interval(1000).subscribe(value => console.log(`Tick: ${value}`))
  }

  ngOnDestroy(): void {
    console.log('PriceComponent ngOnDestroy');
    this.interval$?.unsubscribe();
  }



}
