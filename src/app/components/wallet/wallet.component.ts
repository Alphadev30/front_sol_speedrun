import { Component } from '@angular/core';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
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
