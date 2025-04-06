import { Directive, ElementRef, Input, input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {
@Input('appRepeat') set render (time:number){
  for (let index = 0; index < time; index++) {
    
    this.viewCon.createEmbeddedView(this.tempRef,{});
  }
}
  constructor(private tempRef:TemplateRef<any>,private viewCon:ViewContainerRef) { }

}
