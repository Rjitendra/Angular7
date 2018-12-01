import { Output, EventEmitter } from '@angular/core';

import { Observable, Subject } from 'rxjs';

export class EmitService {
  navchange: EventEmitter<any> = new EventEmitter();
  commentChange: EventEmitter<any> = new EventEmitter();
  quoteDetailChangeOnPricing: EventEmitter<any> = new EventEmitter();
  eventChange: EventEmitter<any> = new EventEmitter();

  constructor() { }
  emitNavChangeEvent() {
    this.navchange.emit();
  }
  getNavChangeEmitter() {
    return this.navchange;
  }
  emitCommentChangeEvent() {
    this.commentChange.emit();
  }
  getCommentChangeEmitter() {
    return this.commentChange;
  }

  // Calling this method will refresh all of the data(Activity, Quote Summary, Quote Details, and Quote Line Items)
  // It's used by child components such as pricing-request.component.ts
  emitQuoteDetailChangeOnPricingEvent() {
    this.quoteDetailChangeOnPricing.emit();
  }

  getQuoteDetailChangeOnPricingEmitter() {
    return this.quoteDetailChangeOnPricing;
  }

  emitDocumentationChangeEvent() {
    this.navchange.emit();
  }

  getDocumentationEmitter() {
    return this.navchange;
  }

  sendChangeRequest(message: any) {
    this.eventChange.emit(message);
  }
  getChangeRequest(): Observable<any> {
    return this.eventChange;
  }

}
