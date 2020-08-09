export interface Ingreso {
  id?: string,
  idItem: string,
  fecha: string,
  cantidad: number,
  precio?: number
  IdUsuario?: string,
  modalidad?: string;
}
