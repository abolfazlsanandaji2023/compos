import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
ngOnDestroy(): void {
  console.log('partner component destroyed');
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.

}
}
function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}

