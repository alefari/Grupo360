import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Egreso } from '../models/egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresosService {
  egresosColeccion: AngularFirestoreCollection<Egreso>;
  egresos: Observable<Egreso[]>

  constructor(private readonly afs: AngularFirestore) {
    this.egresosColeccion = afs.collection<Egreso>('egresos');
    this.egresos = this.egresosColeccion.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Egreso;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  obtenerEgresos() {
    return this.egresos;
  }

  agregarEgreso(nuevoEgreso: Egreso) {
    this.egresosColeccion.add(nuevoEgreso);
  }

}
