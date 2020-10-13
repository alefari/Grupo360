import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Eliminacion } from '../models/eliminacion.model';

@Injectable({
  providedIn: 'root'
})
export class EliminadosService {
  eliminadosColeccion: AngularFirestoreCollection<Eliminacion>;
  eliminados: Observable<Eliminacion[]>

  constructor(private readonly afs: AngularFirestore) {
    this.eliminadosColeccion = afs.collection<Eliminacion>('eliminados');
    this.eliminados = this.eliminadosColeccion.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Eliminacion;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }
  obtenerEliminados() {
    return this.eliminados;
  }

  agregarEliminado(nuevoEliminado: Eliminacion) {
    this.eliminadosColeccion.add(nuevoEliminado);
  }
}
