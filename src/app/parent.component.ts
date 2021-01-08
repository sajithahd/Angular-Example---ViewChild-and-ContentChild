import { Component, Input } from "@angular/core";
import { ListItem } from "./list-item";

@Component({
  selector: "parent",
  template: `
    <div>
      <span *ngFor="let item of items; i = index"> {{item.display}}</span>
    </div>
    <child-list [items]="items"></child-list>
  `,
  styles: [``]
})
export class ParentComponent {
  items: ListItem[];

  constructor() {
    this.items = [
      { name: "List item 1", display: false },
      { name: "List item 2", display: false },
      { name: "List item 3", display: false },
      { name: "List item 4", display: false }
    ];
  }
}
