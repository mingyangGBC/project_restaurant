import { Component } from '@angular/core';
import { StorageService } from './services/restauraunt/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storageService: StorageService) {
    this.storageService.init();
  }
}
