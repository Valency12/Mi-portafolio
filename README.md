# Portfolio Personal - Valency

Portfolio personal con formulario de contacto funcional que envía emails automáticamente.

## 🚀 Características

- Diseño responsivo y moderno
- Formulario de contacto funcional
- Envío automático de emails
- Secciones: Experiencia, Proyectos, Herramientas, Sobre mí
- Enlaces a LinkedIn y GitHub

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn
- Cuenta de Gmail con contraseña de aplicación

## 🔧 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone <tu-repositorio>
   cd Mi-portafolio
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las credenciales de email:**
   
   Edita el archivo `config.env` y reemplaza:
   ```
   EMAIL_USER=fercortez120@gmail.com
   EMAIL_PASS=tu_contraseña_de_aplicacion
   ```

   **⚠️ Importante:** Para Gmail, necesitas usar una "Contraseña de aplicación":
   
   - Ve a tu cuenta de Google
   - Seguridad → Verificación en 2 pasos (actívala si no está activa)
   - Contraseñas de aplicación → Genera una nueva
   - Usa esa contraseña en `EMAIL_PASS`

4. **Inicia el servidor:**
   ```bash
   npm start
   ```

5. **Abre tu navegador:**
   ```
   http://localhost:3000
   ```

## 📧 Configuración del Email

### Para Gmail:
1. Activa la verificación en 2 pasos
2. Genera una contraseña de aplicación
3. Usa esa contraseña en `config.env`

### Para otros proveedores:
Cambia `EMAIL_SERVICE` en `config.env`:
- Outlook: `outlook`
- Yahoo: `yahoo`
- Otros: consulta la documentación de Nodemailer

## 🛠️ Scripts Disponibles

- `npm start` - Inicia el servidor en producción
- `npm run dev` - Inicia el servidor en modo desarrollo (con nodemon)

## 📁 Estructura del Proyecto

```
Mi-portafolio/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── server.js           # Servidor Node.js
├── package.json        # Dependencias
├── config.env          # Configuración (crear)
├── imagenes/           # Imágenes del portfolio
└── README.md           # Este archivo
```

## 🔒 Seguridad

- El archivo `config.env` contiene información sensible
- Agrégalo a `.gitignore` para no subirlo al repositorio
- Nunca compartas tus credenciales de email

## 🚀 Despliegue

### Opciones recomendadas:
- **Vercel** (gratis)
- **Netlify** (gratis)
- **Heroku** (gratis con limitaciones)
- **Railway** (gratis)

### Variables de entorno en producción:
Configura las mismas variables que están en `config.env` en tu plataforma de hosting.

## 📞 Contacto

- **Email:** fercortez120@gmail.com
- **LinkedIn:** [Maria Fernanda Valencia](https://www.linkedin.com/in/maria-fernanda-valencia-34062b200/)
- **GitHub:** [Valency12](https://github.com/Valency12)

---

¡Gracias por visitar mi portfolio! 😊