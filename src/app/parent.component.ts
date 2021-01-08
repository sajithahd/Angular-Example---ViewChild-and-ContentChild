import { AfterViewInit, Component, Input, ViewChild } from "@angular/core";
import { ChildListComponent } from "./child-list.component";
import { ListComponent } from "./list-component";
import { ListItem } from "./list-item";

@Component({
  selector: "parent",
  template: `
    <div class="trigger-wrapper">
      <span
        class="item-trigger"
        (click)="toggle(i)"
        *ngFor="let item of items; let i = index"
      >
        {{ item.name }}</span
      >
    </div>
    <child-list [items]="items" #list>
      <div>Projected Content</div>
    </child-list>

    
  `,
  styles: [
    `
      .trigger-wrapper {
        margin-bottom: 30px;
      }
      .item-trigger {
        background: green;
        padding: 10px;
        margin: 2px;
        border-radius: 4px;
        cursor: pointer;
      }
    `
  ]
})
export class ParentComponent implements AfterViewInit {
  items: ListItem[];
  // 1. Component or Directive based reffrencing
  // @ViewChild(ChildListComponent) listComponent: ListComponent;

  // 2. string tag based reffrencing
  @ViewChild('list') listComponent: ListComponent;


  constructor() {
    this.items = [
      { name: "List item 1", display: false },
      { name: "List item 2", display: false },
      { name: "List item 3", display: false },
      { name: "List item 4", display: false }
    ];
  }

  ngAfterViewInit(): void {
    // console.log(this.listComponent);
  }

  toggle(index: number): void {
    this.listComponent.toggle(index);
  }
}
