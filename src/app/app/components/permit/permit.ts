import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { CurrencyService } from '../../../services/currency.service';
import { Permit, PermitDetailsDialogComponent } from './permit.details.dialog';

@Component({
  selector: 'app-permit',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    MatTabsModule, MatStepperModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule,
    MatButtonModule, MatDatepickerModule, MatNativeDateModule,
    MatCardModule, MatIconModule, MatDialogModule, MatSnackBarModule
  ],
  templateUrl: './permit.html',
  styles: [`
    .grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
    .row { display: flex; gap: .75rem; align-items: center; flex-wrap: wrap; }
    .actions { display: flex; justify-content: flex-end; gap: .5rem; margin-top: .75rem; }
    .muted { opacity: .8; }
    .pill { padding: .15rem .5rem; border-radius: 999px; font-size: 12px; background:#eef; }
    mat-card img { width: 100%; height: 120px; object-fit: cover; border-radius: 10px; }
    .req-list { margin-left: 1.1rem; }
  `]
})
export class PermitComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private dialog = inject(MatDialog);
  private snack = inject(MatSnackBar);
  public currency = inject(CurrencyService);

  // -------- Apply: Stepper forms --------
  acceptReq = signal(false);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    nationality: ['', Validators.required],
    passport: ['', [Validators.required, Validators.minLength(6)]],
    type: ['tourist', Validators.required],
    start: [new Date(), Validators.required],
    end: [null as Date | null, Validators.required]
  });

  // sample pricing
  priceSar = computed(() => {
    const t = this.form.get('type')?.value;
    return t === 'business' ? 320 : t === 'work' ? 480 : 180; // SAR
  });

  proceedToCheckout() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload = {
      name: `Permit: ${this.form.value.type?.toString().toUpperCase()}`,
      priceSar: this.priceSar()
    };
    this.router.navigate(['/checkout'], { state: { room: payload } });
  }

  // -------- Approved permits (demo) --------
  approved: Permit[] = [
    {
      id: 'KSA-PRM-2025-0017',
      holder: 'Jehan Traveler',
      type: 'tourist',
      issueDate: '2025-10-12',
      expiryDate: '2025-11-12',
      status: 'Active',
      notes: 'Single-entry; Western Region access',
      qr: 'assets/qr01.png'
    },
    {
      id: 'KSA-PRM-2025-0042',
      holder: 'Jehan Traveler',
      type: 'business',
      issueDate: '2025-08-01',
      expiryDate: '2026-02-01',
      status: 'Active',
      notes: 'Multiple-entry; Central + Eastern Regions',
      qr: 'assets/qr01.png'
    }
  ];

  openDetails(p: Permit) {
    this.dialog.open(PermitDetailsDialogComponent, {
      data: p,
      width: '520px'
    });
  }

  copyId(id: string) {
    navigator.clipboard?.writeText(id).then(() => {
      this.snack.open('Permit ID copied', 'OK', { duration: 1200 });
    });
  }
}
