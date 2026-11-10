# gestion-inventario-mongodb
implementación de una base de datos NoSQL con MongoDB para la gestión de productos, proveedores, clientes, ventas e inventarios de la casa del computador.   
Proyecto MongoDB – La Casa del Computador

Descripción del proyecto

En este repositorio comparto el trabajo que realicé utilizando MongoDB para el caso de La Casa del Computador, un negocio dedicado a la venta de computadores, portátiles, impresoras y accesorios tecnológicos.

La idea de este proyecto es organizar la información del negocio en una base de datos, donde se puedan registrar los productos, proveedores, clientes, ventas y movimientos de inventario.

Base de datos

La base de datos se llama casa_computador y está organizada en cinco colecciones:

* productos: contiene la información de los productos, sus precios y cantidades disponibles.
* proveedores: almacena los datos de los proveedores.
* clientes: contiene la información de los clientes.
* ventas: registra las ventas realizadas.
* movimientos_inventario: permite registrar las entradas y salidas de productos.

Desarrollo realizado

Para poner en práctica el funcionamiento de MongoDB, se crearon 105 documentos distribuidos entre las cinco colecciones:

* Productos: 40 documentos.
* Proveedores: 10 documentos.
* Clientes: 20 documentos.
* Ventas: 20 documentos.
* Movimientos de inventario: 15 documentos.

También realicé diferentes consultas y ejercicios para comprobar el funcionamiento de la base de datos, como insertar, consultar, actualizar y eliminar información. Además, trabajé con filtros, relaciones entre colecciones mediante $lookup y operaciones de agregación para obtener cantidades, sumas y promedios.

Archivos del proyecto

En este repositorio se encuentran los códigos que utilicé durante el desarrollo de la actividad:

* 01_crear_bd.js
* 02_insertar_datos.js
* 03_consultas_crud.js
* 04_filtros_lookup.js
* 05_agregaciones.js

Herramientas utilizadas

* MongoDB Atlas.
* MongoDB Compass.
* MongoDB Shell.

Este trabajo me permitió conocer mejor cómo funciona una base de datos NoSQL y practicar diferentes operaciones con MongoDB a partir de un caso de uso relacionado con la administración de un negocio.
