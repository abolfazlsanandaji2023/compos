import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatictiesComponent } from './staticties.component';

describe('StatictiesComponent', () => {
  let component: StatictiesComponent;
  let fixture: ComponentFixture<StatictiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatictiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatictiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
