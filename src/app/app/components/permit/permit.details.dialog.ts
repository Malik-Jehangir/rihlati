import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface Permit {
  id: string;
  holder: string;
  type: 'tourist' | 'business' | 'work';
  issueDate: string;
  expiryDate: string;
  status: 'Active' | 'Expired' | 'Revoked';
  notes?: string;
  qr?: string;
}

@Component({
  selector: 'app-permit-details-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <h2 mat-dialog-title>Permit Details</h2>
    <mat-dialog-content>
      <div style="display:grid; grid-template-columns: 100px 1fr; gap:1rem; align-items:center;">
        <img *ngIf="data.qr" [src]="data.qr" alt="QR" style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
        <div>
          <p><strong>{{ data.type | titlecase }}</strong> — <span [style.color]="'#2e7d32'">{{ data.status }}</span></p>
          <p>ID: {{ data.id }}</p>
          <p>Holder: {{ data.holder }}</p>
          <p>Valid: {{ data.issueDate }} → {{ data.expiryDate }}</p>
          <p *ngIf="data.notes" style="opacity:.85;">Notes: {{ data.notes }}</p>
        </div>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-flat-button color="primary" mat-dialog-close>OK</button>
    </mat-dialog-actions>
  `
})
export class PermitDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Permit) {}
}
