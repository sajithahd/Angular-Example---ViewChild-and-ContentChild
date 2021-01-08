import { style } from "@angular/animations";
import { Component, Input } from "@angular/core";
import { ListComponent } from "./list-component";
import { ListItem } from "./list-item";

@Component({
  selector: "child-list",
  template: `
    <div
      class="list-item"
      *ngFor="let item of items; let i = index"
      [ngClass]="{ selected: item.display }"
      (click)="toggle(i)"
    >
      {{ item.name }}
    </div>
  `,
  styles: [
    `
      .list-item {
        padding: 20px;
        cursor: pointer;
      }

      .selected {
        background: #999;
      }
    `
  ]
})
export class ChildListComponent implements ListComponent{
  @Input() items: ListItem[];

  toggle(index: number): void {
    this.items[index].display = !this.items[index].display;
  }
}
