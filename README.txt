BEAUTYPOD AI ASSISTANT

PUBLICAR: sube index.html, manifest.json, sw.js, icons/, img/ y assets/ a la raíz del repositorio BeautyPod/AI-Assistant (Settings > Pages > main > /root).
LOGO: copia beautypod-logo.svg del sitio original a assets/img/. Si no está, se muestra el icono robot provisional.
PRECIOS (solo en el script de index.html):
- MODALIDAD_GLOBAL = "CUP" o "USD".
- CUP_PRECIO_ACTUAL_SANO: nuevo precio del Preventivo Completo (Sano).
- USD_TASA_ACTUAL: nueva tasa CUP/USD.
- CAMBIOS_ESPECIFICOS: precio de un concepto concreto (prevalece sobre lo global).
- Tarifas con base:null están pendientes; para autorizarlas escribe su precio en CAMBIOS_ESPECIFICOS (o en base).
- ajuste:false en una tarifa la excluye de los ajustes globales.
Al publicar una nueva versión, cambia CACHE ("beautypod-ai-v4") en sw.js.
