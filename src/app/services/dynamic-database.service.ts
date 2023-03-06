import { Injectable } from '@angular/core';
import { delay, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DynamicDatabaseService {

  constructor() { }

  dataMap = new Map<string, string[]>([
    ["Fruits", ["Apple", "Orange", "Banana"]],
    ["Vegetables", ["Tomato", "Potato", "Onion"]],
    ["Apple", ["Fuji", "Macintosh"]],
    ["Onion", ["Yellow", "White", "Purple"]],
    ["Macintosh", ["Yellow", "White", "Purple"]],
  ]);

  rootLevelNodes: string[] = ["Fruits", "Vegetables"];

  getChildren(node: string) {
    // adding delay to mock a REST API call
    return of(this.dataMap.get(node));
  }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }
}
