import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { InvestDetailsDialog, InvestProject } from './invest.details.dialog';

@Component({
  selector: 'app-invest',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './invest.html',
  styles: [`
    h2 { margin-bottom: 1rem; }
    .grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }
    mat-card { cursor: pointer; transition: transform .15s ease, box-shadow .15s ease; }
    mat-card:hover { transform: translateY(-3px); box-shadow: 0 6px 18px rgba(0,0,0,.12); }
    mat-card img { height: 150px; width: 100%; object-fit: cover; border-radius: 8px; }
    .meta { display: flex; gap: .5rem; align-items: center; opacity: .85; }
  `]
})
export class InvestComponent {
  private dialog = inject(MatDialog);

  projects: InvestProject[] = [
    {
      id: 'NX-NEO-01',
      title: 'NEOM Eco-Lodge Cluster',
      sector: 'Tourism & Hospitality',
      location: 'Tabuk • NEOM',
      minTicketSar: 1500000,
      irr: 0.18,
      timeline: '36 months',
      image: 'assets/invest01.png',
      blurb: 'Sustainable eco-lodges with high-end desert experiences and year-round adventure tourism.',
      highlights: ['Green building standards', 'High ADR potential', 'Proximity to key attractions']
    },
    {
      id: 'RD-LOG-02',
      title: 'Riyadh Last-Mile Logistics Hub',
      sector: 'Logistics & Warehousing',
      location: 'Riyadh',
      minTicketSar: 1000000,
      irr: 0.16,
      timeline: '30 months',
      image: 'assets/invest02.png',
      blurb: 'Automated micro-fulfillment center to serve fast-growing e-commerce corridors.',
      highlights: ['Automation-ready', 'Anchor tenant interest', 'Near ring road']
    },
    {
      id: 'EA-GEN-03',
      title: 'Al Ahsa Solar Farm (25 MW)',
      sector: 'Renewable Energy',
      location: 'Eastern Province',
      minTicketSar: 2000000,
      irr: 0.20,
      timeline: '48 months',
      image: 'assets/invest03.png',
      blurb: 'Utility-scale PV with grid PPA; strong yield profile and bankable EPC partners.',
      highlights: ['Long-term PPA', 'Low O&M', 'Carbon credits potential']
    },
    {
      id: 'JED-FNB-04',
      title: 'Jeddah Waterfront Food Hall',
      sector: 'F&B / Retail',
      location: 'Jeddah Corniche',
      minTicketSar: 750000,
      irr: 0.15,
      timeline: '24 months',
      image: 'assets/invest04.png',
      blurb: 'Curated artisanal brands and family dining destination on a prime waterfront strip.',
      highlights: ['High footfall', 'Flexible leases', 'Tourist + local demand']
    }
  ];

  formatSar(n: number) {
    return new Intl.NumberFormat('en-SA', { style: 'currency', currency: 'SAR', maximumFractionDigits: 0 }).format(n);
  }

  openDetails(p: InvestProject) {
    this.dialog.open(InvestDetailsDialog, {
      data: { ...p, formattedTicket: this.formatSar(p.minTicketSar) },
      width: '540px'
    });
  }
}
