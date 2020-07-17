
export interface Item {
  id?: string;
  nombre: string;
  tipo: string;
  cantidad?: number;
  ubicacion?: string;
  fecha?: Date;
  responsable?: string;
  estado?: string;
  vencimiento?: Date;
}
