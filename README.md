# 📊 Tablero de Control Operativo · PMO

¡Bienvenido! Este repositorio contiene el **Reporte Ejecutivo de la PMO** transformado en una aplicación web interactiva. Permite visualizar de forma limpia y ágil el portafolio de programas y proyectos de la organización, optimizando el seguimiento operativo.

## 🚀 Características del Proyecto
*   **Buscador Inteligente:** Filtra proyectos o responsables en tiempo real mientras escribes.
*   **Diseño Responsivo:** Adaptado con CSS Grid y Flexbox para verse perfecto en monitores, tablets y celulares.
*   **Separación de Datos:** Toda la información se administra desde un archivo independiente (`data.js`), facilitando su mantenimiento sin tocar el código base.
*   **Estilo Ejecutivo:** Tarjetas modernas con sombreado sutil y tipografía combinada (`Inter` y `Merriweather`).

## 📂 Estructura de Archivos
*   `index.html`: Estructura base del tablero web.
*   `styles.css`: Reglas de diseño visual, variables de color y layouts responsivos.
*   `data.js`: **Insumo de datos** (actúa como la base de datos de los proyectos).
*   `app.js`: Motor JavaScript que procesa los filtros y renderiza las tarjetas dinámicamente.

## 🛠️ Cómo Actualizar los Proyectos
Cuando necesites agregar un proyecto o cambiar un responsable, **solo debes editar el archivo `data.js`**. La página web leerá los cambios automáticamente al actualizarse.
