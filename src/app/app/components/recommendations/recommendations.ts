import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Recommendation, RecommendationDetailsDialog } from './recommendation-details.dialog';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './recommendations.html',
  styles: [`
    h2 { margin-bottom: 1rem; }
    .grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }
    mat-card {
      cursor: pointer;
      transition: transform .15s ease, box-shadow .15s ease;
    }
    mat-card:hover {
      transform: translateY(-3px);
      box-shadow: 0px 6px 18px rgba(0,0,0,.12);
    }
    mat-card img {
      height: 150px;
      width: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  `]
})
export class RecommendationsComponent {

  private dialog = inject(MatDialog);

  recommendations: Recommendation[] = [
    {
      id: 1,
      title: 'Najd Village Restaurant',
      type: 'restaurant',
      location: 'Riyadh',
      price: 'SAR 90 avg',
      image: 'assets/rec01.png',
      desc: 'Authentic Najdi experience featuring Kabsa, Jareesh, and freshly baked bread in a traditional setting.',
      extras: ['Family seating', 'Traditional interior', 'Arabic coffee included']
    },
    {
      id: 2,
      title: 'Al Baik',
      type: 'restaurant',
      location: 'Jeddah',
      price: 'SAR 18 avg',
      image: 'assets/rec02.png',
      desc: 'Saudi Arabia’s favorite fried chicken chain. Quick, delicious, and impossible to visit only once.',
      extras: ['Fast service', 'Late night']
    },
    {
      id: 3,
      title: 'AlUla — Elephant Rock',
      type: 'attraction',
      location: 'AlUla',
      opening: '24/7',
      image: 'assets/rec03.png',
      desc: 'A majestic natural rock formation shaped like an elephant, surrounded by desert stars and ancient sites.',
      extras: ['Great for photos', 'Stargazing']
    },
    {
      id: 4,
      title: 'Edge of the World',
      type: 'attraction',
      location: 'Riyadh',
      opening: 'Sunrise–Sunset',
      image: 'assets/rec04.png',
      desc: 'Dramatic cliffs with vast views over the desert. A must-hike adventure for nature lovers.',
      extras: ['Guided tours available', 'Best at sunset']
    }
  ];

  openDetails(rec: Recommendation) {
    this.dialog.open(RecommendationDetailsDialog, {
      data: rec,
      width: '480px'
    });
  }
}
