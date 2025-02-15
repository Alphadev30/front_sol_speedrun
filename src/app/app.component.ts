import { Component } from '@angular/core';
import { WalletComponent } from './components/wallet/wallet.component'; // Import WalletComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [WalletComponent], // Add WalletComponent to imports
})
export class AppComponent {
  title = 'solspeed';
}
