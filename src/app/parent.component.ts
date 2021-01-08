import { Component, Input } from "@angular/core";



@Component({
  selector: "parent",
  template: `
    <child-list [items]=""></child-list>
  `,
  styles: [``]
})
export class ParentComponent {
  
}
