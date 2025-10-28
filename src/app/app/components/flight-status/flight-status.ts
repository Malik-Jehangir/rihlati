import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Flight, FlightDetailsDialogComponent } from './flight-details.dialog';

@Component({
  selector: 'app-flight-status',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatIconModule, MatDialogModule],
  templateUrl: './flight-status.html',
  styles: [`
    .grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
    mat-card { position: relative; overflow: hidden; }
    .thumb { height: 140px; width: 100%; object-fit: cover; border-radius: 8px; }
    .chip {
      position: absolute; top: 12px; left: 12px;
      font-weight: 600;
    }
    .green { background: #e6f4ea; color: #1e7e34; }
    .red { background: #fde7e9; color: #b00020; }
    .row { display: flex; align-items: center; gap: .5rem; }
    .muted { opacity: .8; font-size: 13px; }
  `]
})
export class FlightStatusComponent {
  private dialog = inject(MatDialog);

  flights: Flight[] = [
    {
      id: 'SV123',
      airline: 'Saudia',
      from: 'RUH',
      to: 'JED',
      depTime: '2025-11-04T14:25:00',
      arrTime: '2025-11-04T15:40:00',
      gate: 'B12',
      seat: '12A',
      status: 'on-time',
      image: 'assets/flight01.png'
    },
    {
      id: 'SV321',
      airline: 'Saudia',
      from: 'JED',
      to: 'DXB',
      depTime: '2025-11-06T06:10:00',
      arrTime: '2025-11-06T09:10:00',
      gate: 'F3',
      seat: '18C',
      status: 'delayed',
      image: 'assets/flight01.png'
    },
       {
      id: 'SV321',
      airline: 'Saudia',
      from: 'JED',
      to: 'DXB',
      depTime: '2025-11-06T06:10:00',
      arrTime: '2025-11-06T09:10:00',
      gate: 'F3',
      seat: '18C',
      status: 'delayed',
      image: 'assets/flight01.png'
    },
      {
  id: 'SV201',
  airline: 'Saudia',
  from: 'JED',
  to: 'RUH',
  depTime: '2025-11-06T07:45:00',
  arrTime: '2025-11-06T09:00:00',
  gate: 'C12',
  seat: '14A',
  status: 'on-time',
  image: 'assets/flight01.png'
},
{
  id: 'SV431',
  airline: 'Saudia',
  from: 'JED',
  to: 'DXB',
  depTime: '2025-11-06T10:20:00',
  arrTime: '2025-11-06T13:20:00',
  gate: 'F5',
  seat: '22D',
  status: 'boarding',
  image: 'assets/flight01.png'
},
{
  id: 'SV809',
  airline: 'Saudia',
  from: 'JED',
  to: 'CAI',
  depTime: '2025-11-06T12:15:00',
  arrTime: '2025-11-06T14:00:00',
  gate: 'E8',
  seat: '7B',
  status: 'gates open',
  image: 'assets/flight01.png'
},
{
  id: 'SV321',
  airline: 'Saudia',
  from: 'JED',
  to: 'DXB',
  depTime: '2025-11-06T06:10:00',
  arrTime: '2025-11-06T09:10:00',
  gate: 'F3',
  seat: '18C',
  status: 'on-time',
  image: 'assets/flight01.png'
}

  ];

  openDetails(f: Flight) {
    this.dialog.open(FlightDetailsDialogComponent, {
      data: f,
      width: '560px'
    });
  }
}
