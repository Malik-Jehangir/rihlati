import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app/components/landing/landing')
        .then(m => m.LandingComponent),
    title: 'Rihlati — Welcome'
  },
  {
    path: 'explore-ksa',
    loadComponent: () =>
      import('./app/components/explore-ksa/explore-ksa')
        .then(m => m.ExploreKsaComponent),
    title: 'Explore KSA'
  },
   {
    path: 'rooms',
    loadComponent: () => import('./app/components/rooms/rooms').then(m => m.RoomsComponent),
    title: 'Book a Room'
  },
  {
    path: 'checkout',
    loadComponent: () => import('./app/components/checkout/checkout').then(m => m.CheckoutComponent),
    title: 'Checkout'
  },
  { path: 'ride', loadComponent: () => import('./app/components/ride/ride').then(m => m.RideComponent), title: 'Book a Ride' },
  { path: 'permit', loadComponent: () => import('./app/components/permit/permit').then(m => m.PermitComponent), title: 'Permit' },
  { path: 'flight-status', loadComponent: () => import('./app/components/flight-status/flight-status').then(m => m.FlightStatusComponent), title: 'Flight Status' },
  { path: '**', redirectTo: '' }
];
