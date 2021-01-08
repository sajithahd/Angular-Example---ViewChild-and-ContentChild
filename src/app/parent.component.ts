import { Component, Input } from "@angular/core";
import { ListItem } from "./list-item";



@Component({
  selector: "parent",
  template: `
    <child-list [items]="items"></child-list>
  `,
  styles: [``]
})
export class ParentComponent {
  items: ListItem[];
}
