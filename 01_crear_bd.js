// Seleccionar la base de datos del proyecto
const dbProyecto = db.getSiblingDB("casa_computador");

// Crear las cinco colecciones del sistema
const colecciones = [
  "productos",
  "proveedores",
  "clientes",
  "ventas",
  "movimientos_inventario"
];

// Crear las colecciones si todavía no existen
colecciones.forEach((nombre) => {
  if (!dbProyecto.getCollectionNames().includes(nombre)) {
    dbProyecto.createCollection(nombre);
    print("Colección creada: " + nombre);
  } else {
    print("La colección ya existe: " + nombre);
  }
});

print("Base de datos: " + dbProyecto.getName());
print("Configuración inicial finalizada.");
