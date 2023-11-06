import Producto from "../../entities/Producto.js";
import DetalleProducto from "../detalleProducto/DetalleProducto.jsx";
import "./Main.css";

// un producto de ejemplo con datos reales
const producto = new Producto(
  "123",
  "Celular Samsung Galaxy",
  "Celular Samsung Galaxy A10s 32gb 2gb Ram 6.2 Dual Sim 4g Lte",
  19999,
  12
);

export default function Main() {
  return (
    <main>
      <h1>¡Clase 3 - Primera proyecto React!</h1>
      <DetalleProducto producto={producto} />
    </main>
  );
}
