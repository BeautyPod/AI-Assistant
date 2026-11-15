BEAUTYPOD AI ASSISTANT — PRIMERA VERSIÓN

Publicación:
1. Descomprime el contenido.
2. Sube index.html, manifest.json, sw.js e icons/ a la raíz del repositorio GitHub AI-Assistant.
3. En GitHub: Settings > Pages > Deploy from a branch > main > /(root).
4. Abre https://beautypod.github.io/AI-Assistant/

Edición de precios:
Abre index.html y busca CONFIG en el script inferior.
- mainServices: servicios principales.
- extras: servicios adicionales.
- conditions: motivos de consulta y precios orientativos.
Los importes están en CUP. Los rangos se suman como rangos y no se calcula un promedio.

Notas:
- La aplicación abre WhatsApp con un mensaje preparado; el cliente debe enviarlo manualmente.
- El funcionamiento offline se activa tras la primera visita online y la instalación del Service Worker.
- El logotipo se intenta cargar desde el repositorio Web existente. Si la ruta falla, aparece el icono de robot asistente.
- Esta es una primera versión editable. Revisa precios, textos y compatibilidades antes de publicarla al público.
