import { Injectable } from '@angular/core';
import { Ingreso } from '../models/ingreso.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
  ingresosColeccion: AngularFirestoreCollection<Ingreso>;
  ingresos: Observable<Ingreso[]>

  constructor(private readonly afs: AngularFirestore) {
    this.ingresosColeccion = afs.collection<Ingreso>('ingresos');
    this.ingresos = this.ingresosColeccion.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Ingreso;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  obtenerIngresos() {
    return this.ingresos;
  }

  agregarIngreso(nuevoIngreso: Ingreso) {
    this.ingresosColeccion.add(nuevoIngreso);
  }

}
