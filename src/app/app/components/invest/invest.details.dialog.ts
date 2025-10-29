import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

export interface InvestProject {
  id: string;
  title: string;
  sector: string;
  location: string;
  minTicketSar: number;
  irr: number;            // 0.18 = 18%
  timeline: string;
  image: string;
  blurb: string;
  highlights: string[];
}

@Component({
  selector: 'app-invest-details-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>

    <mat-dialog-content>
      <img [src]="data.image" alt="project"
           style="width:100%;height:160px;object-fit:cover;border-radius:10px;margin-bottom:.75rem;">

      <p style="opacity:.85;margin:.25rem 0;">
        <mat-icon style="vertical-align:middle;">place</mat-icon> {{ data.location }} ·
        <mat-icon style="vertical-align:middle;">apartment</mat-icon> {{ data.sector }}
      </p>

      <p style="text-align:justify;">{{ data.blurb }}</p>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem;margin:.75rem 0;">
        <div><strong>Min Ticket</strong><br>{{ data.formattedTicket || (data.minTicketSar | number:'1.0-0') + ' SAR' }}</div>
        <div><strong>Target IRR</strong><br>{{ (data.irr * 100) | number:'1.0-1' }}%</div>
        <div><strong>Horizon</strong><br>{{ data.timeline }}</div>
      </div>

      <h4 style="margin:.75rem 0 .25rem;">Highlights</h4>
      <ul style="margin:0;padding-left:1.2rem;">
        <li *ngFor="let h of data.highlights">{{ h }}</li>
      </ul>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
      <button mat-flat-button color="primary" mat-dialog-close>
        I’m interested
      </button>
    </mat-dialog-actions>
  `
})
export class InvestDetailsDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
