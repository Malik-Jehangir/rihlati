import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './navbar.html',
  styles: [`
    .brand { font-weight: 700; letter-spacing: .5px; }
    mat-toolbar { position: sticky; top: 0; z-index: 1000; }
    .spacer { flex: 1 1 auto; }
  `]
})
export class NavbarComponent implements OnInit {
  private dialog = inject(MatDialog);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  userName: string | null = null;

  ngOnInit() {
    if (!this.isBrowser) return; 
    const raw = localStorage.getItem('rihlatiUser');
    if (raw) {
      try {
        const u = JSON.parse(raw);
        this.userName = u?.name || (u?.email ? u.email.split('@')[0] : null);
      } catch {}
    }
  }

  openAuth() {
    const ref =    this.dialog.open(AuthDialogComponent, {
    width: '480px',
    height: 'auto',
    maxHeight: 'none', 
    maxWidth: '95vw',
    autoFocus: false,
    panelClass: 'rihlati-auth-dialog'
  });
    ref.afterClosed().subscribe(ok => {
      if (!ok || !this.isBrowser) return;
      const raw = localStorage.getItem('rihlatiUser');
      if (raw) {
        try {
          const u = JSON.parse(raw);
          this.userName = u?.name || (u?.email ? u.email.split('@')[0] : null);
        } catch {}
      }
    });
  }
}
