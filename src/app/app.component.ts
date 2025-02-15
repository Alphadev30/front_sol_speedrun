import { Component } from '@angular/core';
import { WalletComponent } from './components/wallet/wallet.component'; // ✅ Import WalletComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true, // ✅ Required for standalone components
  imports: [WalletComponent], // ✅ Add WalletComponent here instead of app.config.ts
})
export class AppComponent {
  title = 'solspeed';
}
