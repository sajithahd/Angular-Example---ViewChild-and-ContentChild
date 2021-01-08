import { style } from "@angular/animations";
import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  Renderer2
} from "@angular/core";
import { ContentIdentifierDirective } from "./content-identifier.directive";
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

    <ng-content></ng-content>
  `,
  styles: [
    `
      .list-item {
        padding: 20px;
        cursor: pointer;
      }

      .selected {
        background: #999;
        margin-bottom: 4px;
        border-radius: 4px;
      }
     
    `
  ]
})
export class ChildListComponent implements ListComponent, AfterContentInit {
  @Input() items: ListItem[];

  @ContentChild(ContentIdentifierDirective, { read: ElementRef })
  contentChild: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterContentInit(): void {
    this.renderer.addClass(this.contentChild.nativeElement, "content");
  }

  toggle(index: number): void {
    this.items[index].display = !this.items[index].display;
  }
}
