# 🚀 INSTRUCCIONES DE CONFIGURACIÓN COMPLETA
# POS Universal v3.0 — Jose Becerra · 📱 0424-600-6536

---

# ARCHIVOS QUE DEBES TENER
```
📁 pos-jb/
  ├── index.html              ← La aplicación completa (112 KB)
  ├── sw.js                   ← Service Worker (offline)
  ├── manifest.json           ← Config PWA (instalación)
  ├── google_apps_script.js   ← Código para Google Sheets
  ├── INSTRUCCIONES.md        ← Este archivo
  └── MANUAL_DE_USO.md        ← Manual del sistema
```

---

# PARTE 1 — CONFIGURAR FIREBASE (BASE DE DATOS EN LA NUBE)
## Tiempo estimado: 10 minutos

---

## PASO 1 — Crear tu proyecto Firebase

**1.1** Abre tu navegador y ve a:
👉 **https://console.firebase.google.com**

**1.2** Inicia sesión con tu cuenta de Google (Gmail)

**1.3** Haz clic en el botón **"Crear un proyecto"**
- Verás un formulario con 3 pasos

**1.4** Paso 1 del formulario — Nombre:
- Escribe un nombre para tu proyecto, por ejemplo: `pos-jose-becerra`
- Acepta los términos
- Clic en **"Continuar"**

**1.5** Paso 2 — Google Analytics:
- Desactiva la opción de Google Analytics (no la necesitas)
- Clic en **"Crear proyecto"**

**1.6** Espera unos segundos... aparece la pantalla: "Tu nuevo proyecto está listo"
- Clic en **"Continuar"**

---

## PASO 2 — Crear la base de datos Firestore

**2.1** En el menú izquierdo, busca y haz clic en **"Firestore Database"**
- (Si no lo ves, haz clic en el ícono de menú ☰ y búscalo)

**2.2** Clic en el botón azul **"Crear base de datos"**

**2.3** Aparece una ventana con 2 opciones:
- Selecciona **"Comenzar en modo de producción"**
- Clic en **"Siguiente"**

**2.4** Seleccionar la ubicación:
- En el menú desplegable, selecciona: **`us-east1`** (la más cercana a Venezuela)
- Clic en **"Listo"**

**2.5** Espera unos segundos... La base de datos está creada ✅

---

## PASO 3 — Configurar las reglas de seguridad

**3.1** Una vez en Firestore, haz clic en la pestaña **"Reglas"**

**3.2** Verás un código parecido a este:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

**3.3** Borra TODO ese texto y reemplázalo con:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /negocios/{negocioId}/{document=**} {
      allow read, write: if true;
    }
  }
}
```

**3.4** Clic en el botón **"Publicar"**
- Verás una advertencia, haz clic en **"Publicar"** de nuevo para confirmar

---

## PASO 4 — Obtener la configuración de tu aplicación

**4.1** En el menú izquierdo, haz clic en el ⚙️ (engranaje) junto a "Descripción general del proyecto"
- Selecciona **"Configuración del proyecto"**

**4.2** Baja hasta la sección **"Tus apps"**
- Si no hay ninguna app, haz clic en el ícono **"</>"** (Web)
- Ponle un nombre: `pos-jb`
- NO actives Firebase Hosting
- Clic en **"Registrar app"**

**4.3** Verás un cuadro con código parecido a esto:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyAbc123...",
  authDomain: "pos-jose-becerra.firebaseapp.com",
  projectId: "pos-jose-becerra",
  storageBucket: "pos-jose-becerra.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456"
};
```

**4.4** Copia estos valores (guárdalos en un bloc de notas)

**4.5** Clic en **"Continuar en la consola"**

---

## PASO 5 — Pegar la configuración en el sistema

**5.1** Abre el archivo `index.html` con un editor de texto
- Windows: clic derecho → "Abrir con" → Bloc de notas
- Mac: clic derecho → "Abrir con" → TextEdit
- Recomendado: descargar **Notepad++** (Windows) o **Visual Studio Code** (ambos)

**5.2** Usa Ctrl+F (o Cmd+F en Mac) para buscar el texto:
```
TU_API_KEY
```

**5.3** Encontrarás esta sección:
```javascript
const FIREBASE_CONFIG = {
  apiKey:            "TU_API_KEY",
  authDomain:        "TU_PROJECT.firebaseapp.com",
  projectId:         "TU_PROJECT_ID",
  storageBucket:     "TU_PROJECT.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId:             "TU_APP_ID"
};
```

**5.4** Reemplaza cada valor con el tuyo. Resultado final:
```javascript
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyAbc123...",
  authDomain:        "pos-jose-becerra.firebaseapp.com",
  projectId:         "pos-jose-becerra",
  storageBucket:     "pos-jose-becerra.appspot.com",
  messagingSenderId: "123456789012",
  appId:             "1:123456789012:web:abc123def456"
};
```

**5.5** Busca ahora la línea:
```javascript
const NEGOCIO_ID = "mi_negocio_demo";
```

**5.6** Cámbiala a un nombre único para tu negocio:
```javascript
const NEGOCIO_ID = "bodega_la_esquina_2025";
```
- Usa solo letras, números y guiones bajos
- Sin espacios ni caracteres especiales

**5.7** Guarda el archivo (Ctrl+S)

---

# PARTE 2 — PUBLICAR EN GITHUB PAGES (GRATIS)
## Tiempo estimado: 5 minutos

---

## PASO 6 — Crear cuenta en GitHub

**6.1** Ve a: **https://github.com**

**6.2** Clic en **"Sign up"** (Registrarse)
- Elige un nombre de usuario (este será parte de tu URL)
- Ingresa tu email y contraseña
- Verifica tu email

**6.3** Si ya tienes cuenta, haz clic en **"Sign in"** e inicia sesión

---

## PASO 7 — Crear repositorio y subir archivos

**7.1** Una vez dentro de GitHub, clic en el botón verde **"New"** o **"+ New repository"**

**7.2** Completa el formulario:
- **Repository name**: `pos-mi-negocio` (o el nombre que prefieras)
- **Description**: Sistema POS (opcional)
- Selecciona **"Public"** (público, para que GitHub Pages funcione gratis)
- NO actives ninguna otra opción
- Clic en **"Create repository"**

**7.3** En la pantalla que aparece, busca el texto:
**"uploading an existing file"** y haz clic en ese enlace

**7.4** Arrastra o selecciona los 3 archivos:
- `index.html`
- `sw.js`
- `manifest.json`

**7.5** Al fondo de la página, en "Commit changes":
- Deja el mensaje como está o escribe: `POS Jose Becerra v3`
- Clic en el botón verde **"Commit changes"**

---

## PASO 8 — Activar GitHub Pages

**8.1** En tu repositorio, haz clic en la pestaña **"Settings"** (Configuración)
- Está en la barra superior del repositorio

**8.2** En el menú izquierdo, haz clic en **"Pages"**

**8.3** En la sección **"Source"**:
- Haz clic en el menú que dice "None" o "Deploy from a branch"
- Selecciona **"Deploy from a branch"**

**8.4** En **"Branch"**:
- Selecciona **"main"**
- En el menú de carpeta selecciona **"/ (root)"**
- Clic en **"Save"**

**8.5** Espera 2-3 minutos y recarga la página

**8.6** Aparecerá un cuadro verde con tu URL:
```
✅ Your site is live at https://TU_USUARIO.github.io/pos-mi-negocio
```

**8.7** Copia esa URL — ¡es la dirección de tu sistema POS! 🎉

---

## PASO 9 — Crear primer usuario administrador

**9.1** Abre la URL de tu sistema en el navegador

**9.2** Si Firebase está bien configurado, el sistema cargará y mostrará la pantalla de login

**9.3** Por ahora usa las credenciales demo:
- Email: `admin@demo.com`
- Contraseña: `admin123`

**9.4** Ve a ⚙️ **Configuración → 👥 Usuarios**

**9.5** Clic en **"+ Nuevo Usuario"** y crea tu usuario real con tu email y contraseña

**9.6** Dale rol **"Administrador"**

**9.7** Cierra sesión y entra con tu nuevo usuario

**9.8** Vuelve a ⚙️ Configuración → Usuarios y **elimina los usuarios demo**

---

# PARTE 3 — GOOGLE SHEETS (EXPORTACIÓN AUTOMÁTICA)
## Tiempo estimado: 10 minutos

---

## PASO 10 — Crear la hoja de cálculo

**10.1** Ve a: **https://sheets.google.com**

**10.2** Clic en **"+"** para crear una hoja nueva

**10.3** Ponle un nombre: `POS - Mi Negocio - Reportes`

---

## PASO 11 — Agregar el código Apps Script

**11.1** En el menú superior de Google Sheets, haz clic en:
**Extensiones → Apps Script**

Se abre una nueva pestaña con el editor de código

**11.2** Verás un código que dice algo como:
```javascript
function myFunction() {
  
}
```

**11.3** Selecciona TODO ese texto (Ctrl+A) y bórralo

**11.4** Abre el archivo `google_apps_script.js` (incluido en tu descarga) con el bloc de notas
- Selecciona todo el contenido (Ctrl+A) y cópialo (Ctrl+C)

**11.5** Pega el código en el editor de Apps Script (Ctrl+V)

**11.6** Haz clic en el ícono 💾 (guardar) o presiona Ctrl+S
- Ponle nombre al proyecto: `POS Webhook`
- Clic en **"OK"**

---

## PASO 12 — Publicar el script como aplicación web

**12.1** En el menú del editor, haz clic en el botón azul **"Implementar"**
- Si no lo ves, busca en el menú: **Implementar → Nueva implementación**

**12.2** Clic en el ícono ⚙️ junto a "Tipo" y selecciona **"Aplicación web"**

**12.3** Configura así:
- **Descripción**: `POS Webhook` (o lo que quieras)
- **Ejecutar como**: `Yo (tu email@gmail.com)`
- **Quién tiene acceso**: **"Cualquier persona"** ← MUY IMPORTANTE

**12.4** Clic en **"Implementar"**

**12.5** Aparece una ventana pidiendo permisos:
- Clic en **"Autorizar acceso"**
- Elige tu cuenta de Google
- Puede aparecer una advertencia de "Google no verificó esta app"
- Clic en **"Avanzado"** → **"Ir a POS Webhook (no seguro)"**
- Clic en **"Permitir"**

**12.6** Aparece la URL de tu webhook. Se ve así:
```
https://script.google.com/macros/s/AKfycby.../exec
```

**12.7** Copia esa URL completa

---

## PASO 13 — Conectar el webhook con el POS

**13.1** Abre `index.html` con el editor de texto

**13.2** Busca la línea:
```javascript
const SHEETS_WEBHOOK = "";
```

**13.3** Pega tu URL entre las comillas:
```javascript
const SHEETS_WEBHOOK = "https://script.google.com/macros/s/AKfycby.../exec";
```

**13.4** Guarda el archivo (Ctrl+S)

**13.5** Sube el archivo actualizado a GitHub:
- Ve a tu repositorio en GitHub
- Haz clic en `index.html` en la lista de archivos
- Clic en el ícono de lápiz ✏️ (editar)
- Selecciona todo el contenido y pega el nuevo `index.html`
- Clic en **"Commit changes"**

**13.6** Espera 1-2 minutos y prueba:
- En el POS, ve a 📈 Reportes o ⚙️ Configuración → Exportar
- Clic en **"📊 → Google Sheets"**
- Revisa tu hoja de Google Sheets — los datos deben aparecer

---

# PARTE 4 — PARA VENDER A OTRO NEGOCIO
## Tiempo: 5 minutos por cliente

---

## PASO 14 — Crear instancia para nuevo cliente

**14.1** Descarga los 3 archivos originales (`index.html`, `sw.js`, `manifest.json`)

**14.2** Abre `index.html` y cambia solo esta línea:
```javascript
// Antes:
const NEGOCIO_ID = "bodega_la_esquina_2025";

// Después (para el nuevo cliente):
const NEGOCIO_ID = "supermercado_el_exito_valencia";
```

**14.3** Crea un nuevo repositorio en GitHub para ese cliente:
- Nombre sugerido: `pos-supermercado-exito`

**14.4** Sube los 3 archivos al nuevo repositorio

**14.5** Activa GitHub Pages para ese repositorio

**14.6** El cliente recibe su URL propia:
```
https://TU_USUARIO.github.io/pos-supermercado-exito
```

**14.7** Los datos del cliente son 100% privados y separados
- El mismo Firebase almacena ambos negocios pero en carpetas completamente separadas

---

# RESUMEN — URLs IMPORTANTES

| Servicio | URL |
|---------|-----|
| Firebase Console | https://console.firebase.google.com |
| GitHub | https://github.com |
| Google Sheets | https://sheets.google.com |
| Tu sistema POS | https://TU_USUARIO.github.io/pos-mi-negocio |

---

# SOLUCIÓN DE PROBLEMAS COMUNES

**❓ "El sistema carga pero los datos no se guardan"**
→ Firebase no está configurado correctamente. Verifica el PASO 5 — que los valores del `firebaseConfig` estén bien copiados.

**❓ "Sale advertencia amarilla en la barra superior"**
→ Es normal si Firebase no está configurado. El sistema funciona en modo local.

**❓ "No puedo iniciar sesión con mi usuario nuevo"**
→ Asegúrate de que el usuario está guardado en Firebase. Ve a ⚙️ Config → Usuarios y verifica que aparezca.

**❓ "La exportación a Google Sheets no funciona"**
→ Verifica que el SHEETS_WEBHOOK está bien pegado en `index.html`. También asegúrate de que el script tiene permiso "Cualquier persona".

**❓ "Los cambios que hice en index.html no se ven en el sistema"**
→ GitHub Pages tarda 1-3 minutos en actualizar. Recarga la página con Ctrl+F5.

**❓ "El sistema no carga en iPhone"**
→ Usa Safari (no Chrome) en iPhone. Añade a pantalla de inicio desde Safari.

---

*Desarrollado por **Jose Becerra** · 📱 0424-600-6536*
*POS Universal v3.0 — White Label · Firebase ☁️ · PWA · Multi-negocio*
