import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';



interface City {
  name: string;
  temperature: number;
  image: string;
}


@Component({
  selector: 'app-explore-ksa',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './explore-ksa.html',
  styles: [`
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
  }

  mat-card img {
    height: 140px;
    object-fit: cover;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .25rem .5rem 0 .5rem;
  }

  mat-card-title {
    margin-right: .5rem;
    font-weight: 600;
  }

  .bell {
    margin-left: auto;
  }
`]
})
export class ExploreKsaComponent {

  constructor(private snack: MatSnackBar) {}

  cities: City[] = [
    { name: 'Riyadh', temperature: 33, image: 'assets/city01.png' },
    { name: 'Jeddah', temperature: 30, image: 'assets/city02.png' },
    { name: 'Makkah', temperature: 35, image: 'assets/city03.png' },
    { name: 'Madinah', temperature: 32, image: 'assets/city04.png' },
    { name: 'Dammam', temperature: 31, image: 'assets/city05.png' },
    { name: 'Al Khobar', temperature: 31, image: 'assets/city06.png' },
    { name: 'Abha', temperature: 24, image: 'assets/city07.png' },
    { name: 'Taif', temperature: 26, image: 'assets/city08.png' }
  ];

  activateAlerts(city: string) {
    this.snack.open(`Alerts activated for ${city}`, 'OK', { duration: 2000 });
  }
}
