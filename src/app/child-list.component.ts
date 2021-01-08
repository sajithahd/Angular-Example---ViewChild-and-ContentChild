import { Component, Input } from "@angular/core";
import { ListItem } from "./list-item";

@Component({
  selector: "child-list",
  template: `
    <div *ngFor="let item of items; let i = index">{{ item.name }}</div>
  `
})
export class ChildListComponent {
  @Input() items: ListItem[];
}
