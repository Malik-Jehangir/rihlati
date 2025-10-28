import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  // Demo rate; adjust anytime
  private readonly SAR_TO_PKR = 75;

  toPKR(sar: number): number {
    return Math.round(sar * this.SAR_TO_PKR);
  }
}
