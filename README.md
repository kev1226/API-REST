# REST-API Hola Mundo

Este proyecto es un ejemplo básico de una API REST usando Node.js y Express.

## Cómo usar
1. Instala las dependencias:
   ```
   npm install
   ```
2. Inicia el servidor:
   ```
   node index.js
   ```
3. Abre tu navegador o Postman y accede a:
   ```
   http://localhost:3000
   ```
## Uso de ngrok
Para exponer tu servidor local de manera pública, puedes usar ngrok.

### Pasos para usar ngrok:
1. **Configura tu token de autenticación**:
   ```bash
   ./ngrok.exe config add-authtoken 2paOcYZfXpFBNZomR8oIeU9q6O2_452i8m58SWgrcyRxG1iht
   ```

2. **Inicia ngrok para exponer el puerto 3000**:
   ```bash
   ./ngrok.exe http 3000
   ```

**Nota**: Asegúrate de que el proyecto esté corriendo (`node index.js`) antes de activar ngrok. Una vez que se active, ngrok generará una URL pública que podrás usar para acceder a tu API desde cualquier lugar.

