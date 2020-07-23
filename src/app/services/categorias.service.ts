import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Categoria } from '../models/categoria.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriasColeccion: AngularFirestoreCollection<Categoria>
  categorias: Observable<Categoria[]>

  constructor(private readonly afs: AngularFirestore) {
    this.categoriasColeccion = afs.collection<Categoria>('categoria');
    this.categorias = this.categoriasColeccion.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Categoria;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  obtenerCategorias() {
    return this.categorias;
  }

}
