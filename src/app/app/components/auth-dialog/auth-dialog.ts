import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule,
  ],
  templateUrl: './auth-dialog.html',
styles: [`
  .form-stack {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: .75rem;
    margin-top: .75rem;
  }
`]

})
export class AuthDialogComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<AuthDialogComponent>);
  private snack = inject(MatSnackBar);

  hideSignInPw = true;
  hideSignUpPw = true;

  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [true]
  });

  signUpForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  signIn() {
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    const { email } = this.signInForm.value;
    // Fake auth success
    localStorage.setItem('rihlatiUser', JSON.stringify({ name: email?.split('@')[0], email }));
    this.snack.open('Signed in successfully', 'OK', { duration: 1800 });
    this.dialogRef.close(true);
  }

  signUp() {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
    const { name, email } = this.signUpForm.value;
    // Fake register success
    localStorage.setItem('rihlatiUser', JSON.stringify({ name, email }));
    this.snack.open(`Welcome, ${name}!`, 'OK', { duration: 1800 });
    this.dialogRef.close(true);
  }
}
