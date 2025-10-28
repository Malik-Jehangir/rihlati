import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CurrencyService } from '../../../services/currency.service';

export interface Room {
  id: number;
  name: string;
  priceSar: number;
  image: string;
  beds: number;
  size: number;
  distanceKm: number;
}

@Component({
  selector: 'app-room-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './room-dialog.html'
})
export class RoomDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public room: Room,
    private dialogRef: MatDialogRef<RoomDialogComponent>,
    private router: Router,
    public currency: CurrencyService
  ) {}

  book() {
    this.dialogRef.close();
    this.router.navigate(['/checkout'], { state: { room: this.room } });
  }
}
