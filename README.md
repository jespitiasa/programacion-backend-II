# programacion-backend-II

 Programación Backend II: Diseño y Arquitectura Backend - CODERHOUSE


# E-commerce Project

Proyecto de e-commerce desarrollado con Node.js, Express y MongoDB.

## Descripción del Proyecto

Este proyecto es del curso de Backend, avanzando con nuevas funcionalidades para una tienda online especializada en instrumentos musicales, principalmente guitarras. Se han implementado mejoras en la seguridad, autenticación, manejo de sesiones y carritos de compra para ofrecer una experiencia robusta y escalable.

===============================================

Descripción del Proyecto
------------------------

Este proyecto es la entrega primera del curso de `"Programación Backend II: Diseño y Arquitectura Backend"` para la academia `CoderHouse`. El mismo consta de una tienda en línea. La aplicación ofrece diversas funcionalidades avanzadas, como autenticación, gestión de productos, carrito de compras, procesamiento de pedidos, y un panel de administración para gestionar el stock de productos.

Estructura del Proyecto
-----------------------

La aplicación sigue una estructura MVC (Modelo-Vista-Controlador), junto con capas adicionales para la gestión de datos y lógica de negocio. A continuación, se describen los directorios principales:

-   **`src/`**: Directorio raíz del código fuente.
    -   **`controllers/`**: Archivos de controladores para manejar la lógica de negocio.
    -   **`dao/`**: Capa de acceso a datos (DAO) para la interacción con la base de datos.
        -   **`db/`**: Implementaciones específicas de la base de datos.
        -   **`models/`**: Definiciones de esquemas de Mongoose.
        -   **`repositories/`**: Implementaciones del patrón de repositorio para abstracción de base de datos.
    -   **`dto/`**: Definiciones de Objetos de Transferencia de Datos (DTO).
    -   **`middlewares/`**: Funciones middleware personalizadas, como autenticación y autorización.
    -   **`public/`**: Recursos estáticos (CSS, JavaScript del cliente, imágenes).
    -   **`routes/`**: Definiciones de rutas de Express para las APIs y vistas.
    -   **`services/`**: Lógica de negocio centralizada.
    -   **`utils/`**: Funciones de utilidad y helpers.
    -   **`views/`**: Plantillas Handlebars para renderizar las vistas del cliente.