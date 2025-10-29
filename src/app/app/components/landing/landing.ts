import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './landing.html',
  styles: [`
    /* Hero */
    .hero {
      position: relative;
      min-height: clamp(420px, 68vh, 760px);
      display: grid;
      place-items: center;
      text-align: center;
      color: #fff;
      overflow: hidden;
      border-radius: 16px;
      isolation: isolate;
    }

    /* New: real background layer (set from template with [style.backgroundImage]) */
    .hero-bg {
      position: absolute;
      inset: 0;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      filter: brightness(0.65);
      transform: scale(1.04);
      z-index: -2;
    }

    /* Keep the overlay for contrast */
    .hero::after {
      content: "";
      position: absolute; inset: 0;
      background:
        radial-gradient(1200px 600px at 50% 100%, rgba(11,94,215,.35), transparent 60%),
        linear-gradient(to top, rgba(0,0,0,.45), rgba(0,0,0,.1));
      z-index: -1;
    }

    .hero-content { padding: clamp(1rem, 3vw, 2rem); max-width: 980px; }
    .hero h1 { font-size: clamp(2rem, 5vw, 3.25rem); margin: 0 0 .5rem; letter-spacing: .3px; }
    .hero p  { font-size: clamp(1rem, 2.2vw, 1.125rem); margin: 0 auto 1.25rem; text-align: justify; }
    .cta { display: flex; gap: .75rem; flex-wrap: wrap; justify-content: center; }

    /* Quick services pills */
    .pills {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: .75rem; margin: 1rem auto 0; max-width: 1100px;
    }
    .pill {
      display: flex; align-items: center; gap: .5rem;
      padding: .65rem .9rem; border-radius: 999px; background: #ffffffE6;
      box-shadow: 0 2px 10px rgba(0,0,0,.06);
      color: #0b5ed7; font-weight: 600;
      justify-content: center;
    }
    .pill .mat-icon { font-size: 20px; height: 20px; width: 20px; }

    /* Content sections */
    .section {
      display: grid; gap: 1.25rem; align-items: center;
      grid-template-columns: 1.2fr 1fr;
      margin: 2rem 0;
    }
    .section.reverse { grid-template-columns: 1fr 1.2fr; }
    .section img {
      width: 100%; height: clamp(220px, 36vh, 360px);
      object-fit: cover; border-radius: 16px;
      box-shadow: 0 8px 30px rgba(0,0,0,.08);
    }
    .section h3 { margin: 0 0 .5rem; font-size: clamp(1.25rem, 2.5vw, 1.75rem); }
    .section p  { margin: 0; text-align: justify; color: #333; }

    /* Feature cards */
    .features { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
    .feature mat-card { border-radius: 16px; }
    .feature .mat-icon { font-size: 28px; height: 28px; width: 28px; color: #0b5ed7; }

    /* Stats strip */
    .stats {
      display: grid; grid-template-columns: repeat(4,1fr); gap: .75rem;
      background: #0b5ed7; color: #fff; border-radius: 14px;
      padding: .9rem; text-align: center;
    }
    .stats strong { display: block; font-size: clamp(1.2rem, 3vw, 1.6rem); }
    .stats span { opacity: .9; }

    @media (max-width: 900px) {
      .section, .section.reverse { grid-template-columns: 1fr; }
    }
  `]
})
export class LandingComponent {}
