import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  itemsColeccion: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>

  constructor(private readonly afs: AngularFirestore) {

    this.itemsColeccion = afs.collection<Item>('inventario');
    this.items = this.itemsColeccion.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  obtenerInventario() {
    return this.items;
  }

  agregarItem(nuevoItem: Item) {
    this.itemsColeccion.doc(nuevoItem.id).set(nuevoItem);
  }

  editarItem(itemEditado: Item) {
    return this.itemsColeccion.doc(itemEditado.id).update(itemEditado);
  }


  }
