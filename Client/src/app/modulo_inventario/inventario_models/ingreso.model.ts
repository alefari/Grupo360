export interface Ingreso {
  id?: string,
  idItem: string,
  nombreItem: string,
  categoriaItem: string,
  unidades: string,
  fecha: string,
  cantidad: number,
  precio?: number
  IdUsuario?: string,
  modalidad?: string;
}
