// 1. ESTADÍSTICAS DE VENTAS
// Calcular cantidad de ventas, ingresos totales y promedio

db.ventas.aggregate([
  {
    $group: {
      _id: null,
      cantidad_ventas: { $sum: 1 },
      ingresos_totales: { $sum: "$total" },
      promedio_venta: { $avg: "$total" }
    }
  }
]);

// 2. ESTADÍSTICAS DE PRODUCTOS POR CATEGORÍA
// Calcular cantidad de productos, precio promedio y suma de precios

db.productos.aggregate([
  {
    $group: {
      _id: "$categoria",
      cantidad_productos: { $sum: 1 },
      precio_promedio: { $avg: "$precio" },
      valor_total_inventario: { $sum: "$precio" }
    }
  }
]);
