import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {


  /*
    ngOnInit
    ngDoCheck
    ngAfterContentInit
    ngAfterContentChecked
    ngAfterViewInit
    ngAfterViewChecked
    ngDoCheck
    ngAfterContentChecked
    ngAfterViewChecked
  * */

  public isProductVisible: boolean = false;
  public currentPrice: number = 10;


  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ProductComponent ${{changes}}`);
    console.log('ProductComponent ngOnChanges');
  }
  ngOnInit(): void {
    console.log('ProductComponent ngOnInit')
  }
  ngDoCheck(): void {
    console.log('ProductComponent ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ProductComponent ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ProductComponent ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ProductComponent ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ProductComponent ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ProductComponent ngOnDestroy');
  }

  increasePrice() {
    this.currentPrice++;
  }

}
