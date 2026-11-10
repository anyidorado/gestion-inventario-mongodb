// 1. CONSULTA CON FILTRO
// Consultar productos de la categoría Computadores

db.productos.find({
  categoria: "Computadores"
});

// 2. RELACIÓN ENTRE COLECCIONES CON $lookup
// Relacionar las ventas con los clientes

db.ventas.aggregate([
  {
    $lookup: {
      from: "clientes",
      localField: "cliente_id",
      foreignField: "_id",
      as: "cliente"
    }
  },
  { $unwind: "$cliente" },
  {
    $project: {
      _id: 0,
      numero_venta: 1,
      "cliente.nombre": 1,
      total: 1
    }
  },
  { $limit: 5 }
]);
