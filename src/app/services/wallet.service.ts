import { Injectable } from '@angular/core';
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  private connection: Connection;
  private wallet: PhantomWalletAdapter;
  
  public connected: boolean = false;
  public publicKey: PublicKey | null = null;

  constructor() {
    this.connection = new Connection(clusterApiUrl('devnet')); // Connect to Solana Devnet
    this.wallet = new PhantomWalletAdapter(); // Initialize Phantom Wallet
  }

  async connectWallet(): Promise<void> {
    try {
      await this.wallet.connect();
      this.connected = true;
      this.publicKey = this.wallet.publicKey!;
      console.log('Wallet Connected:', this.publicKey.toBase58());
    } catch (error) {
      console.error('Wallet Connection Failed:', error);
    }
  }

  async disconnectWallet(): Promise<void> {
    try {
      await this.wallet.disconnect();
      this.connected = false;
      this.publicKey = null;
      console.log('Wallet Disconnected');
    } catch (error) {
      console.error('Wallet Disconnection Failed:', error);
    }
  }
}
