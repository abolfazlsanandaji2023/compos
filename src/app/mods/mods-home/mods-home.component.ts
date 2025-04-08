import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css',
})
export class ModsHomeComponent {
  show = false;
  onChangeModal() {
    console.log('get change parent');
    this.show = false;
    this.show = true;
  }
  onClose() {
    console.log('get close  parent');
    this.show = false;
  }
}
