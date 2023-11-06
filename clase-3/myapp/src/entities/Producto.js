export default class Producto {
  constructor(sku, nombre, descripcion, precio, cantidadDisponible) {
    this.sku = sku;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidadDisponible = cantidadDisponible;
  }
}
