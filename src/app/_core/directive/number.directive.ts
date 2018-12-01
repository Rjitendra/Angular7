import { Directive, ElementRef, HostListener, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { CurrencyPipe } from '../pipe/currency.pipe ';


@Directive({ selector: '[CurrencyFormatter]' })

export class CurrencyFormatterDirective implements OnInit {
  @Output() ngModelChange = new EventEmitter();
  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: CurrencyPipe
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.currencyPipe.parse(this.el.value);
  }
  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    this.el.value = this.currencyPipe.parse(value); // opossite of transform
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value) {
    this.ngModelChange.emit(this.el.value);
  }

  @HostListener('keyup', ['$event.target.value'])
  onKeyUp(value) {
    this.el.value = this.currencyPipe.parse(value);
  }

}