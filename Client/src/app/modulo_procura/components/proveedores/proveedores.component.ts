import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AreasService } from 'src/app/services/areas.service';
import { ProveedoresService } from '../../../services/proveedores.service'
import * as html2pdf from 'html2pdf.js';
import { AuthService } from 'src/app/auth/auth.service';

//ICONOS FONTAWESOME
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  //ICONOS FONTAWESOME
  faSignInAlt = faSignInAlt;
  faListAlt = faListAlt;
  faSignOutAlt = faSignOutAlt;
  faTimesCircle = faTimesCircle;
  faExclamationCircle = faExclamationCircle;
  faPencilAlt = faPencilAlt;
  faPlusCircle = faPlusCircle;
  faInfoCircle = faInfoCircle;
  faTrashAlt = faTrashAlt;
  faFileDownload = faFileDownload;

  //VARIABLES QUE ALMACENAN DATOS DE BD
  proveedores: any = [];
  areas: any = [];

  //VARIABLES DE FUNCIONES COMPONENT
  datosInfo: any = {
    id: null,
    nombre: null,
    area: null,
    descripcion: null,
    rif: null,
    fecha: null,
    contacto: null,
    telefono: null,
    direccion: null,
    correo: null,
  }
  proveedorBorrar: any = {
    id: null,
    nombre: null,
  }
  oculto:boolean = true;

  constructor(private servicioProveedores: ProveedoresService,
              private servicioAreas: AreasService,
              public router: Router,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.servicioProveedores.getProveedores().subscribe(
      res => {
        this.proveedores = res;
      },
      err => console.log(err)
    );
    this.servicioAreas.getAreas().subscribe(
      res => {
        this.areas = res;
      },
      err => console.log(err)
    );
  }


  //FUNCION PARA BOTON DE DETALLES DE PROVEEDOR
  asignarDetalles(proveedor:any){
    this.datosInfo = proveedor;
  }

  //FUNCION PARA BOTON DE BORRAR PROVEEDOR (DATOS)
  asignarBorrar(id: number, nombre:string){
    this.proveedorBorrar.nombre = nombre;
    this.proveedorBorrar.id = id;
  }

  //FUNCION PARA BORRAR PROVEEDOR
  eliminarProveedor() {
    this.servicioProveedores.deleteProveedor(this.proveedorBorrar.id).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  //FUNCION PARA DESCARGAR PDF DE PROVEEDORES
  descargarPDF() {
    this.oculto = false;
    const opciones = {
      margin: 1,
      filename: 'Proveedores.pdf',
      image: {type: 'jpeg', quality: 1},
      html2canvas: {},
      jsPDF: {unit: 'cm', format: 'letter', orientation: 'portrait'}
    };

    const contenido: Element = document.getElementById('elemento-a-exportar');

    html2pdf()
      .from(contenido)
      .set(opciones)
      .save();

      this.oculto = true;
  }

  //FUNCION PARA NAVEGAR A ACTUALIZAR PRODUCTOS
  aProductos(id: string) {
    this.router.navigate([`/procura/proveedores/${id}/productos`]);
  }
}
