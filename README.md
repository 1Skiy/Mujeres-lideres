# Proyecto: Mujeres Líderes  

**Mujeres Líderes** es una aplicación web diseñada para fomentar la participación y el intercambio de información entre usuarios. Los usuarios pueden registrarse, iniciar sesión y publicar noticias. Cada noticia está vinculada al usuario que la creó, quien también tiene la capacidad exclusiva de editar o eliminar su propio contenido.

---

## **Tecnologías utilizadas**  

- **Frontend:** React.js  
- **Backend:** Node.js (Express)  
- **Estilos:** CSS  
- **Base de Datos:** (Por ejemplo, MySQL, PostgreSQL, etc.)  

---

## **Características principales**  

1. **Landing Page**: Página principal que da la bienvenida y presenta la plataforma.  
2. **Registro e Inicio de Sesión**: Los usuarios pueden crear una cuenta o iniciar sesión en la plataforma.  
3. **Publicación de Noticias**:  
   - Cada usuario puede crear publicaciones.  
   - Solo el creador de una publicación puede editarla o eliminarla.  
4. **Gestión de Noticias**:  
   - Edición y eliminación de publicaciones directamente desde la página de noticias.  

---

## **Requisitos previos**  

Antes de empezar, asegúrate de tener lo siguiente instalado en tu máquina:  

- **Node.js** (https://nodejs.org/)  
- **Visual Studio Code** (https://code.visualstudio.com/)  
- **Un gestor de bases de datos compatible** (Ejemplo: MySQL Workbench, pgAdmin, etc., según tu base de datos)
- **La base de datos debe llamarse "blog"**  

---

## **Instrucciones de uso**  

### **Paso 1: Importar la base de datos**  

1. Localiza el archivo SQL de la base de datos (por ejemplo: `basededatos.sql`).  
2. Ábrelo en tu gestor de bases de datos y ejecuta el script para crear las tablas y registros necesarios.  

### **Paso 2: Configurar el entorno**  

1. Clona este repositorio en tu máquina local:  
   ```bash  
   git clone https://github.com/tu-usuario/mujeres-lideres.git  

2. Ubicate en las carpetas para intalar las dependencias:

cd mujeres-lideres
cd api  
cd client

Y usa npm install en las dos ubicaciones

3. Configura el archivo .env dentro de la carpeta api este archivo debe contener

PASS_SEC = "123"
JWT_KEY = "123"
FRONTEND_URL = "http://localhost:5173"
BACKEND_URL = "http://localhost:5000"

4. Inicia el servidor backend con npm start
5. Inicia el frontend con npm run dev

4. Accede a la aplicación en tu navegador:
Frontend: http://localhost:5173 (o el puerto configurado en React.js).
Backend: http://localhost:5000 (o el puerto configurado en Node.js).

**Proyecto realizado por:**

Yony Araujo |
Diego Briceño |
Leoferson Torres |
Nicole Rangel
