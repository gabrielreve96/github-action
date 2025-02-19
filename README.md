# github-action
Programa de consola para obtener acciones dentro de github
# Script interactivo en Node.js para consultar eventos de GitHub

Este script utiliza `readline` para crear un menú interactivo y permite consultar eventos de usuario en GitHub mediante la API de GitHub. Los usuarios pueden filtrar eventos de tipo `CreateEvent`.

## Funcionalidades

1. **Menú interactivo**:
   - `act`: Consulta eventos de un usuario en GitHub.
   - `exit`: Sale del programa.

2. **Consulta a la API de GitHub**:
   - Realiza una solicitud a la API de GitHub para obtener eventos de un usuario.
   - Filtra los eventos de tipo `CreateEvent`.

3. **Manejo de errores**:
   - Implementa manejo de errores para solicitudes fallidas a la API.

## Cómo usar el script

1. Ejecuta el script:
   ```bash
   node app.js
