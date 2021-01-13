import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresBaseComponent } from './proveedores-base.component';

describe('ProveedoresBaseComponent', () => {
  let component: ProveedoresBaseComponent;
  let fixture: ComponentFixture<ProveedoresBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedoresBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedoresBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
