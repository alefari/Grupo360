import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioBaseComponent } from './inventario-base.component';

describe('InventarioBaseComponent', () => {
  let component: InventarioBaseComponent;
  let fixture: ComponentFixture<InventarioBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
