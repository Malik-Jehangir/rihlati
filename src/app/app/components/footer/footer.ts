import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, MatIconModule, FormsModule],
  templateUrl: './footer.html'
})
export class FooterComponent {
  email = '';
  subscribe() { alert(`Subscribed: ${this.email}`); this.email = ''; }
}
