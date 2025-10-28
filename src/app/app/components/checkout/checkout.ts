import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyService } from '../../../services/currency.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.html'
})
export class CheckoutComponent {
  // history.state.room is passed from the dialog
  room = history.state?.room || { name: 'Unknown', priceSar: 0 };

  constructor(public currency: CurrencyService) {}
}
