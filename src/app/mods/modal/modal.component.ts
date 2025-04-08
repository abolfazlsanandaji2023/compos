import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  constructor(private el: ElementRef) {}
  @Output() closeModalEvent = new EventEmitter();
  accaptClose=true;
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // $('.ui.modal').modal({
    //   closable: true // Ensure the modal can be closed
    // });
  }
  ngOnInit(): void {
    console.log(" onInit component");

    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy(): void {
   
    this.el.nativeElement.remove();
  //  if(document.body.hasChildNodes()&&this.accaptClose){
  //   document.body.removeChild(this.el.nativeElement);
  //   console.log("close");
   //}
  }
  closeModal() {
    this.log();
    this.accaptClose=false;
    this.closeModalEvent.emit();
  }
  log() {
    console.log('Modal close click');
  }
}
