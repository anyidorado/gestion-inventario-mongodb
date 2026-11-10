// 1. INSERT: insertar un documento de prueba
db.productos.insertOne({
  codigo: "PRUEBA-ELIMINAR",
  nombre: "Producto de prueba para eliminar",
  categoria: "Pruebas",
  marca: "Prueba",
  precio: 1000,
  stock: 1
});

// 2. SELECT: consultar los primeros cinco productos
db.productos.find().limit(5);

// 3. UPDATE: actualizar el stock del portátil Lenovo
db.productos.updateOne(
  { nombre: "Portátil Lenovo IdeaPad" },
  { $set: { stock: 10 } }
);

// 4. DELETE: eliminar el documento de prueba
db.productos.deleteOne({
  codigo: "PRUEBA-ELIMINAR"
});
