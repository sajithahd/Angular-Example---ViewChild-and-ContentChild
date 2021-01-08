import { Component, Input, ViewChild } from "@angular/core";
import { ListComponent } from "./list-component";
import { ListItem } from "./list-item";

@Component({
  selector: "parent",
  template: `
    <div>
      <span
        class="item-trigger"
        (click)="toggle(i)"
        *ngFor="let item of items; let i = index"
      >
        {{ item.name }}</span
      >
    </div>
    <child-list [items]="items"></child-list>
  `,
  styles: [
    `
      .item-trigger {
        background: green;
        padding: 10px;
        margin: 2px;
        border-radius: 4px;
      }
    `
  ]
})
export class ParentComponent {
  items: ListItem[];

  @ViewChild("listComponent") listComponent: ListComponent;

  constructor() {
    this.items = [
      { name: "List item 1", display: false },
      { name: "List item 2", display: false },
      { name: "List item 3", display: false },
      { name: "List item 4", display: false }
    ];
  }

  toggle(index: number): void {
    this.listComponent.toggle(index);
  }
}
