import { Component, Input } from '@angular/core';
import { DynamicDatabaseService } from 'src/app/services/dynamic-database.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
constructor(private database: DynamicDatabaseService){}
  @Input() data: string[] = [];
  @Input() trigger = "Trigger";
  @Input() isRootNode = false;

  isExpandable(node: string): boolean {
    return this.database.isExpandable(node);
  }
  isLoading = false;
  dataLoaded = false;

  getData(node: string) {
    if (!this.dataLoaded) {
      this.isLoading = true;
      this.database.getChildren(node).subscribe((d) => {
        this.data = d?.slice() || [];
        this.isLoading = false;
        this.dataLoaded = true;
      });
    }
  }
}
