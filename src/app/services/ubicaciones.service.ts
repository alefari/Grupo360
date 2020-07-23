import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UbicacionesService {

  ubicacionesColeccion: AngularFirestoreCollection<any>
  ubicaciones: Observable<any[]>

  constructor(private readonly afs: AngularFirestore) {
    this.ubicacionesColeccion = afs.collection<any>('ubicaciones');
    this.ubicaciones = this.ubicacionesColeccion.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  obtenerUbicaciones() {
    return this.ubicaciones;
  }
}
