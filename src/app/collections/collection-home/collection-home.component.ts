import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrl: './collection-home.component.css'
})
export class CollectionHomeComponent {
   partnActive='';
  compActive='';
  bioActive='active';
  distroyFirstItem(){
    this.data.splice(0,1);
  }
data=[
  {name:'reza',age:27 ,job:'ui',employed:false},
  {name:'ali',age:28 ,job:'billboard',employed:true},
  {name:'mohamad',age:29 ,job:'tester',employed:true},
]
header=[
  {key:'name',value:'Name',show:true},
  {key:'age',value:'Age',show:true},
  {key:'job',value:'Job',show:true},
  {key:'employed',value:'Employed',show:false},
]


compClick(){
  this.bioActive = '';
  this.compActive = 'active';
  this.partnActive = '';
}

partnClick(){
  this.bioActive = '';
  this.compActive = '';
  this.partnActive = 'active';
}
}
