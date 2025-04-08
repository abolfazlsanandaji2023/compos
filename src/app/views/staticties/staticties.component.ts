import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-staticties',
  templateUrl: './staticties.component.html',
  styleUrl: './staticties.component.css'
})
export class StatictiesComponent {
@Input() stats= [];
}
