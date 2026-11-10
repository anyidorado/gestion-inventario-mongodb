(() => {
  const nombresColecciones = [
    "productos",
    "proveedores",
    "clientes",
    "ventas",
    "movimientos_inventario"
  ];

  const yaTieneDatos = nombresColecciones.some(
    nombre => db.getCollection(nombre).countDocuments() > 0
  );

  if (yaTieneDatos) {
    print("ATENCION: Ya existen documentos. No se insertaron datos para evitar duplicados.");
    return;
  }

  // 1. PROVEEDORES: 10 documentos
  const nombresProveedores = [
    "Distribuidora Tech",
    "Mayorista Digital",
    "CompuRed SAS",
    "Tecnología Global",
    "Importaciones del Norte",
    "Soluciones Informáticas",
    "Comercializadora Byte",
    "Mundo Digital",
    "TecnoSuministros",
    "Innovación Electrónica"
  ];

  const idsProveedores = nombresProveedores.map(() => new ObjectId());

  const proveedores = nombresProveedores.map((nombre, i) => ({
    _id: idsProveedores[i],
    nombre: nombre,
    ciudad: ["Bogotá", "Medellín", "Cali", "Barranquilla", "Bucaramanga"][i % 5],
    telefono: "300555" + String(1000 + i),
    correo: "proveedor" + (i + 1) + "@ejemplo.com",
    estado: "activo"
  }));

  db.proveedores.insertMany(proveedores);

  // 2. PRODUCTOS: 40 documentos
  const nombresProductos = [
    "Portátil Lenovo IdeaPad",
    "Portátil HP Pavilion",
    "Portátil Dell Inspiron",
    "Portátil Asus VivoBook",
    "Portátil Acer Aspire",
    "Computador de escritorio HP",
    "Computador Dell OptiPlex",
    "Monitor Samsung 24 pulgadas",
    "Monitor LG 27 pulgadas",
    "Monitor Lenovo 22 pulgadas",
    "Teclado Logitech inalámbrico",
    "Teclado mecánico Redragon",
    "Mouse Logitech óptico",
    "Mouse inalámbrico HP",
    "Impresora Epson EcoTank",
    "Impresora HP LaserJet",
    "Impresora Canon Pixma",
    "Disco SSD Kingston 480GB",
    "Disco SSD Samsung 1TB",
    "Disco duro externo 1TB",
    "Memoria USB 64GB",
    "Memoria USB 128GB",
    "Memoria RAM DDR4 8GB",
    "Memoria RAM DDR4 16GB",
    "Audífonos Logitech",
    "Audífonos inalámbricos JBL",
    "Parlantes Genius",
    "Cámara web Logitech",
    "Micrófono USB",
    "Router TP-Link",
    "Switch de red 8 puertos",
    "Cable HDMI 2 metros",
    "Cable de red Ethernet",
    "Base refrigerante portátil",
    "Maletín para portátil",
    "Cargador universal",
    "Regulador de voltaje",
    "UPS 750VA",
    "Tableta gráfica",
    "Adaptador USB-C"
  ];

  const idsProductos = nombresProductos.map(() => new ObjectId());

  const productos = nombresProductos.map((nombre, i) => ({
    _id: idsProductos[i],
    codigo: "PROD-" + String(i + 1).padStart(3, "0"),
    nombre: nombre,
    categoria: ["Computadores", "Periféricos", "Impresión", "Almacenamiento", "Accesorios"][i % 5],
    marca: ["HP", "Lenovo", "Dell", "Logitech", "Samsung"][i % 5],
    precio: 80000 + (i * 65000),
    stock: 5 + (i % 16),
    stock_minimo: 5,
    proveedor_id: idsProveedores[i % 10],
    estado: "disponible",
    fecha_registro: new Date(2026, 9, 1 + i)
  }));

  db.productos.insertMany(productos);

  // 3. CLIENTES: 20 documentos
  const nombresClientes = [
    "Carlos Rodríguez", "Laura Martínez",
    "Andrés Gómez", "María Fernández",
    "Juan Pérez", "Camila Torres",
    "David Ramírez", "Sofía Herrera",
    "Daniel Castro", "Valentina López",
    "Miguel Sánchez", "Paula Moreno",
    "Sebastián Díaz", "Natalia Vargas",
    "Alejandro Ruiz", "Isabella Jiménez",
    "Felipe Rojas", "Gabriela Ortiz",
    "Santiago Romero", "Daniela Reyes"
  ];

  const idsClientes = nombresClientes.map(() => new ObjectId());

  const clientes = nombresClientes.map((nombre, i) => ({
    _id: idsClientes[i],
    nombre: nombre,
    ciudad: ["Bogotá", "Medellín", "Cali", "Pereira"][i % 4],
    correo: "cliente" + (i + 1) + "@ejemplo.com",
    telefono: "310555" + String(2000 + i),
    estado: "activo"
  }));

  db.clientes.insertMany(clientes);

  // 4. VENTAS: 20 documentos
  const ventas = [];

  for (let i = 0; i < 20; i++) {
    const indice1 = (i * 2) % 40;
    const indice2 = (i * 2 + 1) % 40;

    const cantidad1 = 1 + (i % 3);
    const cantidad2 = 1 + (i % 2);

    const precio1 = productos[indice1].precio;
    const precio2 = productos[indice2].precio;

    ventas.push({
      numero_venta: "VENTA-" + String(i + 1).padStart(3, "0"),
      cliente_id: idsClientes[i],
      fecha: new Date(2026, 9, 1 + i),
      productos: [
        {
          producto_id: idsProductos[indice1],
          cantidad: cantidad1,
          precio_unitario: precio1
        },
        {
          producto_id: idsProductos[indice2],
          cantidad: cantidad2,
          precio_unitario: precio2
        }
      ],
      total: (cantidad1 * precio1) + (cantidad2 * precio2),
      metodo_pago: ["Efectivo", "Transferencia", "Tarjeta"][i % 3],
      estado: "completada"
    });
  }

  db.ventas.insertMany(ventas);

  // 5. MOVIMIENTOS DE INVENTARIO: 15 documentos
  const movimientos = [];

  for (let i = 0; i < 15; i++) {
    movimientos.push({
      producto_id: idsProductos[i],
      tipo: i % 2 === 0 ? "entrada" : "salida",
      cantidad: 2 + (i % 8),
      fecha: new Date(2026, 9, 1 + i),
      motivo: i % 2 === 0 ? "Reposición de mercancía" : "Venta de producto"
    });
  }

  db.movimientos_inventario.insertMany(movimientos);

  print("¡Inserción completada!");
  print("Proveedores: " + db.proveedores.countDocuments());
  print("Productos: " + db.productos.countDocuments());
  print("Clientes: " + db.clientes.countDocuments());
  print("Ventas: " + db.ventas.countDocuments());
  print("Movimientos: " + db.movimientos_inventario.countDocuments());

  const total = nombresColecciones.reduce(
    (suma, nombre) => suma + db.getCollection(nombre).countDocuments(),
    0
  );

  print("TOTAL DE DOCUMENTOS: " + total);
})();
