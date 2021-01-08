import { style } from "@angular/animations";
import { Component, Input } from "@angular/core";
import { ListItem } from "./list-item";

@Component({
  selector: "child-list",
  template: `
    <div
      *ngFor="let item of items; let i = index"
      [ngClass]="{ selected: item.display }"
    >
      {{ item.name }}
    </div>
  `,
  styles: [
    `
      .selected {
        background: red;
      }
    `
  ]
})
export class ChildListComponent {
  @Input() items: ListItem[];
}
