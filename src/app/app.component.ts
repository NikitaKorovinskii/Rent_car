import {Component} from '@angular/core';
import {DataService} from "./data.service";
import {WalletService} from "./Wallet.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService,WalletService]
})
export class AppComponent {
  title = 'Rent car from Kirov';
}
