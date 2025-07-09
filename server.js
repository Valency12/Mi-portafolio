const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Servir archivos estáticos

// Configurar transporter de email
const transporter = nodemailer.createTransporter({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para enviar email
app.post('/api/contact', async (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;

    // Validar campos requeridos
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ 
        success: false, 
        message: 'Todos los campos son requeridos' 
      });
    }

    // Configurar el email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Se envía a ti mismo
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Enviado desde tu portfolio personal</em></p>
      `
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: '¡Mensaje enviado exitosamente! Te contactaré pronto.' 
    });

  } catch (error) {
    console.error('Error enviando email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al enviar el mensaje. Por favor, intenta nuevamente.' 
    });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log('Para detener el servidor, presiona Ctrl+C');
}); 