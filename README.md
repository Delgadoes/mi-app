
---

# Mi App - Sistema de Autenticación con Angular

Este proyecto es una aplicación web SPA (Single Page Application) construida con **Angular 19**, que implementa un flujo completo de autenticación de usuarios (Registro, Inicio de Sesión y Panel de Control protegido).

## 📋 Características

* **Inicio de Sesión (Login):** Formulario validado para acceder a la aplicación.
* **Registro (Register):** Permite crear nuevos usuarios con validación de campos (nombre, email, contraseña mínima de 6 caracteres).
* **Panel de Control (Dashboard):** Área privada accesible solo para usuarios autenticados, mostrando un mensaje de bienvenida personalizado.
* **Guardia de Rutas (Auth Guard):** Protege la ruta `/dashboard` para evitar accesos no autorizados.
* **Interfaz de Usuario:** Diseño limpio y responsivo utilizando componentes de **Angular Material** (Cards, Inputs, Buttons, Toolbar).
* **Gestión de Estado:** Servicio de autenticación centralizado (`AuthService`) para manejar el estado del usuario y la sesión.

## 🛠️ Tecnologías Utilizadas

* **Framework:** Angular 19.2.0
* **Lenguaje:** TypeScript 5.7.2
* **Diseño:** Angular Material 19.2.19
* **Formularios:** Reactive Forms
* **Enrutamiento:** Angular Router

## 🚀 Instalación y Ejecución

Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu sistema.

1. **Clonar el repositorio o descargar los archivos.**
2. **Instalar dependencias:**
Navega a la carpeta del proyecto y ejecuta:
```bash
npm install

```


3. **Ejecutar servidor de desarrollo:**
Para ver la aplicación en tu navegador:
```bash
npm start

```


O usando el CLI de Angular directamente:
```bash
ng serve

```


La aplicación estará disponible en `http://localhost:4200/`.
4. **Compilar para producción:**
```bash
npm run build

```



## 📂 Estructura del Proyecto

Los componentes principales se encuentran en `src/app`:

* **`/login`**: Componente de inicio de sesión (`LoginComponent`).
* **`/register`**: Componente de registro (`RegisterComponent`).
* **`/dashboard`**: Componente principal protegido (`DashboardComponent`).
* **`auth.service.ts`**: Lógica de negocio para manejar usuarios y sesiones.
* **`auth.guard.ts`**: Lógica para proteger rutas.

## ⚠️ Notas Importantes

* **Persistencia de Datos:** Actualmente, el servicio de autenticación (`AuthService`) utiliza un almacenamiento en memoria (array local). Esto significa que **si recargas la página del navegador, los usuarios registrados y la sesión activa se perderán**.
* **Rutas:** Cualquier ruta desconocida redirige automáticamente al login.
