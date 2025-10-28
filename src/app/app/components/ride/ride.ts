import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CurrencyService } from '../../../services/currency.service';

type Driver = {
  id: number;
  name: string;
  car: string;
  distanceKm: number;
  etaMin: number;
  priceSar: number;
  image: string;
};

@Component({
  selector: 'app-ride',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule
  ],
  templateUrl: './ride.html',
  styles: [`
    .stack { display: grid; gap: 1rem; }
    .grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
    .row { display: flex; align-items: center; gap: .5rem; }
    .actions { display: flex; justify-content: flex-end; gap: .5rem; }
    .muted { opacity: .8; font-size: 13px; }
    .center { display: grid; place-items: center; padding: 2rem 0; }
    mat-card img { height: 120px; width: 100%; object-fit: cover; border-radius: 8px; }
  `]
})
export class RideComponent {
  // use inject() so we can safely create form as a field
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snack = inject(MatSnackBar);
  public currency = inject(CurrencyService);

  form = this.fb.group({
    pickup: [{ value: 'Current location', disabled: true }],
    destination: ['', Validators.required]
  });

  finding = false;
  drivers: Driver[] = [];

  private estimatePrice(distanceKm: number) {
    const base = 12;    // SAR
    const perKm = 2.1;  // SAR/km
    return Math.round(base + distanceKm * perKm);
  }

  search() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.finding = true;
    this.drivers = [];
    this.snack.open('Finding nearby drivers…', undefined, { duration: 1200 });

    setTimeout(() => {
      const distances = [0.9, 2.3, 7.8, 12.4]; // km
      const etas = [2, 4, 9, 14];              // min
      const cars = [
        { car: 'Toyota Corolla', img: 'assets/car01.png' },
        { car: 'Nissan Sunny',   img: 'assets/car02.png' },
        { car: 'Land Cruiser',   img: 'assets/car03.png' },
        { car: 'Volkswagen Passat', img: 'assets/car04.png' }
      ];
      const names = ['Ahmed M.', 'Khalid R.', 'Mishal A.', 'Yasir B.'];

      this.drivers = cars.map((c, i) => ({
        id: i + 1,
        name: names[i],
        car: c.car,
        image: c.img,
        distanceKm: distances[i],
        etaMin: etas[i],
        priceSar: this.estimatePrice(distances[i]),
      }));

      this.finding = false;
    }, 1200);
  }

  book(d: Driver) {
    const payload = { name: `Ride with ${d.name} (${d.car})`, priceSar: d.priceSar };
    this.router.navigate(['/checkout'], { state: { room: payload } });
  }
}
