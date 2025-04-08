import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
// @Input() data= {};
@Input() data= [];
@Input() header= [];
@Input() className= '';
ngAfterContentChecked(){
  //console.log ('checked change event');
  
}
distroyFirstItem(){
  this.data.splice(0,1);
}
ngOnChanges(changes: SimpleChanges): void {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  
}

ngOnDestroy(): void {
  console.log("destroy table component");
  
}
}
