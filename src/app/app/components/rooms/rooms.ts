import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { RoomDialogComponent, Room } from './room-dialog';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './rooms.html',
  styles: [`
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 1rem;
    }
    mat-card img { height: 150px; object-fit: cover; }
  `]
})
export class RoomsComponent {
  private dialog = inject(MatDialog);

rooms: Room[] = [
  { id: 1, name: 'Deluxe City View', priceSar: 480, image: 'assets/room01.png', beds: 1, size: 28, distanceKm: 0.9 },
  { id: 2, name: 'Family Suite',    priceSar: 820, image: 'assets/room02.png', beds: 2, size: 45, distanceKm: 2.3 },
  { id: 3, name: 'Executive King',  priceSar: 650, image: 'assets/room03.png', beds: 1, size: 35, distanceKm: 45 },
  { id: 4, name: 'Twin Standard',   priceSar: 360, image: 'assets/room04.png', beds: 2, size: 24, distanceKm: 94 },
];

  openRoom(r: Room) {
    this.dialog.open(RoomDialogComponent, { data: r, width: '520px' });
  }
}
