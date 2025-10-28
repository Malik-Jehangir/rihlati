import { Component, Inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export type Flight = {
  id: string;
  airline: string;
  from: string;
  to: string;
  depTime: string; // ISO
  arrTime: string; // ISO
  gate: string;
  seat: string;
  status: 'on-time' | 'delayed' | 'gates open' | 'boarding';
  image: string;
};

@Component({
  selector: 'app-flight-details-dialog',
  standalone: true,
  imports: [CommonModule, DatePipe, MatDialogModule, MatButtonModule, MatIconModule, MatListModule],
  template: `
    <h2 mat-dialog-title>{{ data.airline }} · {{ data.id }}</h2>

    <mat-dialog-content>
      <div style="display:grid; grid-template-columns: 140px 1fr; gap:1rem; align-items:center;">
        <img [src]="data.image" alt="flight" style="width:140px; height:100px; object-fit:cover; border-radius:8px;">

        <div>
          <p>
            <mat-icon style="vertical-align:middle;">flight_takeoff</mat-icon>
            <strong>{{ data.from }}</strong> ·
            {{ data.depTime | date:'EEE, MMM d, HH:mm' }}
          </p>
          <p>
            <mat-icon style="vertical-align:middle;">flight_land</mat-icon>
            <strong>{{ data.to }}</strong> ·
            {{ data.arrTime | date:'EEE, MMM d, HH:mm' }}
          </p>
          <p>Gate: <strong>{{ data.gate }}</strong> · Seat: <strong>{{ data.seat }}</strong></p>
          <p>Status:
            <span [style.color]="data.status==='on-time' ? '#1e7e34' : '#b00020'">
              {{ data.status === 'on-time' ? 'On-time' : 'Delayed' }}
            </span>
          </p>
        </div>
      </div>

      <h3 style="margin:.75rem 0 .25rem;">Pre-departure checklist</h3>
      <mat-nav-list>
        <a mat-list-item>
          <mat-icon matListItemIcon>assignment_turned_in</mat-icon>
          <div matListItemTitle>Passport & visa</div>
          <div matListItemLine>Valid for 6+ months, permit ready</div>
        </a>
        <a mat-list-item>
          <mat-icon matListItemIcon>work</mat-icon>
          <div matListItemTitle>Baggage</div>
          <div matListItemLine>Weight within allowance, no restricted items</div>
        </a>
        <a mat-list-item>
          <mat-icon matListItemIcon>schedule</mat-icon>
          <div matListItemTitle>Arrive early</div>
          <div matListItemLine>Be at the airport 3 hours before departure</div>
        </a>
        <a mat-list-item>
          <mat-icon matListItemIcon>qr_code_scanner</mat-icon>
          <div matListItemTitle>Boarding pass</div>
          <div matListItemLine>Download / print your pass</div>
        </a>
      </mat-nav-list>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-flat-button color="primary" mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `
})
export class FlightDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Flight) {}
}
