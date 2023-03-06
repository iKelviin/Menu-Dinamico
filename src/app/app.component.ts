import { Component } from '@angular/core';
import { DynamicDatabaseService } from './services/dynamic-database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Menu-Dinamico';
  initialData: string[] = [];
  constructor(private database: DynamicDatabaseService) {
    this.initialData = this.database.rootLevelNodes.slice();
  }
}
