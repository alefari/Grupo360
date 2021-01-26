import { identifierName } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//SERVICIOS IMPORTADOS
import { AreasService } from 'src/app/services/areas.service';
import { ProveedoresService } from '../../../services/proveedores.service'

//ICONOS FONTAWESOME
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-agregar-proveedor',
  templateUrl: './agregar-proveedor.component.html',
  styleUrls: ['./agregar-proveedor.component.css']
})
export class AgregarProveedorComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  //ICONOS FONTAWESOME
  faTimesCircle = faTimesCircle;
  faPlusCircle = faPlusCircle;

  //VARIABLES QUE ALMACENAN DATOS DE BD
  areas: any = [];

  //VARIABLES DE FUNCIONES
  nuevoProveedor: any = 
    {
      id: null,
      nombre: null,
      credito:null,
      dias_credito:null,
      ciudad: null,
      area: null,
      direccion: null,
      correo: null,
      telefono: null,
      celular: null,
      contacto: null,
      rif: null,
      descripcion: null,
    };

  
  constructor(private servicioProveedores: ProveedoresService,
              private servicioAreas: AreasService,
              private router: Router) { }

  ngOnInit(): void {
    this.servicioAreas.getAreas().subscribe(
      res => {this.areas = res;},
      err => console.log(err));
  }

  //FUNCION PARA AGREGAR PROVEEDOR A BD
  onSubmit(){
    let proveedorNuevo = this.nuevoProveedor
    if(proveedorNuevo.nombre!=null && proveedorNuevo.nombre!="" &&
      proveedorNuevo.area!=null && proveedorNuevo.area!=""){
        if(proveedorNuevo.credito == 'No'){
          proveedorNuevo.dias_credito = 0;
        }
      this.servicioProveedores.createProveedor(proveedorNuevo).subscribe(
        res => {console.log(res);
                this.form.reset();
                this.router.navigate(['proveedores/proveedores']);},
        err => { console.log(err); });
    }
  }
  
  //FUNCION PARA BORRAR FORMULARIO AGREGAR
  borrarForm() {
    this.form.reset();
    this.nuevoProveedor = {id: null,
                          nombre: null,
                          area: null,
                          direccion: null,
                          ciudad:null,
                          credito:null,
                          dias_credito:null,
                          correo: null,
                          telefono: null,
                          celular: null,
                          contacto: null,
                          rif: null,
                          descripcion: null};
    this.router.navigate(['proveedores/proveedores']);
  }
}
