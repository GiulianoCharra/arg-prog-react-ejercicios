import "./DetalleProducto.css";

const DetalleProducto = ({ producto }) => {
  const { sku, nombre, descripcion, precio, cantidadDisponible } = producto;
  return (
    <div className="detalle-producto">
      <h3 className="producto__nombre">{nombre}</h3>
      <p className="producto__descripcion">Descripción: {descripcion}</p>
      <p className="producto__precio">Precio: ${precio}</p>
      <p className="producto__sku">SKU: {sku}</p>
      <p className="producto__cantidad">Cantidad disponible: {cantidadDisponible}</p>
    </div>
  );
};

export default DetalleProducto;
