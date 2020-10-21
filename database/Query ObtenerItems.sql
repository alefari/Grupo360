SELECT items.id_item AS id, 
	items.nombre,
    categorias.nombre AS categoria,
    subcategorias.nombre AS subcategoria,
    items.cantidad,
    unidades.nombre AS unidades,
    ubicaciones.nombre AS ubicacion,
    estados.nombre AS estado,
    items.vencimiento,
    items.serial,
    items.precio,
    items.descripcion
FROM grupocdv360.items
LEFT JOIN categorias
ON items.id_categoria = categorias.id_categoria
LEFT JOIN subcategorias
ON items.id_subcategoria = subcategorias.id_subcategoria
LEFT JOIN unidades
ON items.id_unidad = unidades.id_unidad
LEFT JOIN ubicaciones
ON items.id_ubicacion = ubicaciones.id_ubicacion
LEFT JOIN estados
ON items.id_estado = estados.id_estado
ORDER BY items.nombre;