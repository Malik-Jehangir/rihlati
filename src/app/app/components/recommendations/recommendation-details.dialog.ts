import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

export interface Recommendation {
  id: number;
  title: string;
  type: 'restaurant' | 'attraction';
  location: string;
  price?: string;
  opening?: string;
  image: string;
  desc: string;
  extras: string[];
}

@Component({
  selector: 'app-recommendation-details-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>

    <mat-dialog-content>
      <img [src]="data.image" alt="img"
           style="width:100%;height:160px;object-fit:cover;border-radius:10px;margin-bottom:.75rem;">

      <p style="opacity:.8; margin-bottom:.3rem;">
        <mat-icon style="font-size:18px;">place</mat-icon> {{ data.location }}
      </p>

      <p style="text-align:justify;">{{ data.desc }}</p>

      <p *ngIf="data.type==='restaurant'">
        <strong>Avg. Cost:</strong> {{ data.price }}
      </p>
      <p *ngIf="data.type==='attraction'">
        <strong>Opening:</strong> {{ data.opening }}
      </p>

      <h4 style="margin:.75rem 0 .25rem;">Highlights</h4>
      <ul>
        <li *ngFor="let ex of data.extras">{{ ex }}</li>
      </ul>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-flat-button color="primary" mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `
})
export class RecommendationDetailsDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Recommendation) {}
}
