import { Component } from '@angular/core';
import { WalletService } from '../../services/wallet.service';
import { CommonModule } from '@angular/common'; // Import CommonModule


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports
})
export class WalletComponent {
  constructor(public walletService: WalletService) {}

  connect() {
    this.walletService.connectWallet();
  }

  disconnect() {
    this.walletService.disconnectWallet();
  }
}
