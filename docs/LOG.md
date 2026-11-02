# Log de sesiones

Registro de lo que se hizo en cada sesión de trabajo: qué se pidió, qué archivos se tocaron y qué quedó pendiente.
Las entradas más nuevas van arriba.

---

## 2026-11-02 — Estética negro y dorado

**Pedido:** pasar el sitio a la estética negro y dorado del banner: paleta nueva en variables, banner a todo el ancho con el texto debajo y centrado, botones e íconos dorados, inputs oscuros, títulos en Cinzel y secciones alternadas con una línea dorada como separador.

**Antes de empezar:** en `src/config.js` ya estaban cargados el logo (`/Logo.jpeg`), el banner (`/Banner.jpeg`) y un número de WhatsApp nuevo. No se tocaron.

**Ojo:** el pedido decía "[pegar el bloque de arriba]" pero la paleta no vino. Se armó una con los colores del banner y el logo, usando los nombres de variables del pedido (`--gold`, `--gold-light`, `--gold-dark`, `--on-gold`, `--bg`, `--surface`, `--card`, `--ink`, `--line`). Si hay una paleta oficial, se reemplazan los valores en `src/index.css` y el resto se actualiza solo.

### Paleta usada
| Variable | Valor | Uso |
|---|---|---|
| `--bg` | `#0B0B0C` | Fondo general |
| `--surface` | `#141416` | Fondo de las secciones alternadas |
| `--card` | `#1C1C1F` | Tarjetas, inputs, botones del carrusel |
| `--ink` / `--ink-2` | `#F3EEE3` / `#D9D2C3` | Texto principal y secundario |
| `--muted` / `--faint` | `#ABA498` / `#8E887C` | Textos de apoyo |
| `--line` / `--line-strong` | `#3A3731` / `#4F4A40` | Bordes y puntitos inactivos |
| `--gold` | `#C9A24A` | Botones, íconos, foco, selección |
| `--gold-light` | `#E3C27A` | Hover de botones |
| `--gold-dark` | `#8C6B26` | Separadores y borde de botones secundarios |
| `--gold-soft` | `rgba(201,162,74,.12)` | Fondo de íconos y de la opción elegida del Veraz |
| `--on-gold` | `#141006` | Texto sobre dorado |

### Archivos modificados

| Archivo | Cambio |
|---|---|
| `src/index.css` | Paleta nueva (se sacaron `--accent` y `--accent-soft`). `color-scheme: dark` para que los controles nativos del navegador salgan oscuros. Variables de fuente: Cinzel para `h1` y `h2`, Manrope para el resto. Botón principal dorado con hover `--gold-light`. Botón secundario con borde `--gold-dark` y texto `--ink`. |
| `src/App.css` | Todos los colores fijos (`#fff`, etc.) pasaron a variables. Las secciones alternan `--bg` y `--surface` y cada una tiene arriba una línea de 1px `--gold-dark` (el footer también). Eyebrow, íconos de requisitos, viñetas, puntitos del carrusel, garantía elegida y opción elegida del Veraz en dorado. Inputs con fondo `--card`, borde `--line` y `--gold` al hacer foco. Logo del navbar redondo. Footer con el nombre en dorado. |
| `src/components/Banner.jsx` | **Reestructurado.** Arriba el banner a todo el ancho (`aspect-ratio: 1600 / 666`, `object-fit: cover`), sin texto encima. Debajo, eyebrow, título, texto y botones centrados. |
| `index.html` | Se agregó Cinzel (600 y 700) al link de Google Fonts. |

### Verificación
- Búsqueda de colores fijos en `src/` fuera de `:root`: no queda ninguno.
- `npm run lint` y `npm run build`: sin errores.
- No se probó en el navegador.

---

## 2026-11-02 — Carrusel de reseñas para imágenes verticales

**Pedido:** rehacer el carrusel para capturas verticales (9:16), mostrando varias a la vez (3 en desktop, 2 en tablet, 1 en celular), con scroll-snap para deslizar con el dedo, flechas que avanzan de a una imagen, puntitos de posición, `loading="lazy"` y `alt` descriptivo. Sin librerías.

**Antes de empezar:** en `src/config.js` ya estaban cargadas 4 capturas (`/resenias/1.jpg` a `4.jpg`, en `public/resenias/`), y en `src/utils/whatsapp.js` el link había pasado de `wa.me` a `api.whatsapp.com/send`. No se tocaron.

### Archivos modificados

| Archivo | Cambio |
|---|---|
| `src/components/Resenias.jsx` | **Reescrito.** Las reseñas van en una pista horizontal con scroll nativo. Las flechas hacen `scrollBy` del ancho de una tarjeta más la separación, y se deshabilitan al llegar a cada punta. Un `ResizeObserver` y el evento `scroll` calculan cuántas imágenes entran y cuál es la primera visible. Los puntitos son uno por posición posible (con 4 imágenes: 2 en desktop, 3 en tablet, 4 en celular) y al tocarlos se va a esa posición. Cada imagen tiene `loading="lazy"` y un `alt` del tipo "Captura de la reseña de un cliente (1 de 4)". Si `RESENIAS` está vacío se muestran 3 placeholders verticales. |
| `src/App.css` | Nuevos estilos `.carousel-track` (scroll-snap, sin barra de scroll visible), `.carousel-item` y `.resenia` (`aspect-ratio: 9 / 16`, `object-fit: cover`, bordes redondeados, ancho máximo 320px). La cantidad visible se controla con la variable `--visibles`: 3 por defecto, 2 hasta 960px y 1 hasta 600px. En 600px o menos se ocultan las flechas. Se sacaron los estilos viejos `.slide` y `.slide-img`. |

### Medidas aproximadas
- Desktop (contenedor de 1160px): cada imagen mide ~315px de ancho × ~560px de alto.
- Tablet (~800px): ~300 × ~535px.
- Celular: hasta 320 × 570px, centrada.

### Verificación
- `npm run lint` y `npm run build`: sin errores.
- No se probó en el navegador: falta revisar el deslizamiento en un celular real y los tres anchos de pantalla.

---

## 2026-11-02 — Aviso para adjuntar fotos

**Pedido:** agregar "Recordá adjuntar foto del DNI y de la garantía que selecciones" en el texto que está debajo del botón de envío.

### Archivos modificados

| Archivo | Cambio |
|---|---|
| `src/components/FormSolicitud.jsx` | En el texto de debajo del botón se agregó la frase en una línea aparte y en negrita, para que se note. Se corrigieron los acentos ("Recordá", "garantía"). |

### Verificación
- `npm run lint` y `npm run build`: sin errores.

---

## 2026-11-02 — Mensaje de WhatsApp con formato

**Pedido:** que "Enviar por WhatsApp" abra WhatsApp con un mensaje armado con los datos del formulario, con emojis y etiquetas cortas, y la lógica separada en `src/utils/whatsapp.js`. Sin librerías nuevas.

### Archivos creados o modificados

| Archivo | Cambio |
|---|---|
| `src/utils/whatsapp.js` | **Nuevo.** `armarMensaje(garantia, datos)` recorre los campos comunes, los de la garantía elegida y los finales (Veraz) de `CAMPOS`, y arma una línea por campo: emoji + *etiqueta:* valor (vacío → "-"). `abrirWhatsApp(mensaje)` abre `wa.me/<WHATSAPP>` con el mensaje codificado, usando `window.location.href`, o sea en la misma pestaña. |
| `src/config.js` | A cada campo de `CAMPOS` se le agregó `icono` (emoji) y, donde el `label` es largo, `etiquetaMensaje` (ej: "Teléfono (WhatsApp)" → "Teléfono"). `GARANTIAS` pasó de `FormSolicitud.jsx` a acá porque ahora la usan dos archivos. |
| `src/components/FormSolicitud.jsx` | El `onSubmit` llama a `preventDefault`, junta los datos con `FormData` y llama a `armarMensaje` y `abrirWhatsApp`. Se sacó la versión anterior del armado del mensaje. |

### Formato del mensaje
```
📋 *Nueva solicitud de préstamo*

🧾 *Tipo de garantía:* Garantía física
👤 *Nombre:* Juan Pérez
🪪 *DNI:* 30111222
📱 *Teléfono:* 1122334455
💰 *Monto:* 500000
🏠 *Garantía:* Auto Gol 2015
📊 *Deudas en Veraz:* No
```

### Verificación
- `armarMensaje` probado con datos de ejemplo para las dos garantías: el formato sale como el de arriba y los campos vacíos muestran "-".
- Los campos de la garantía no elegida no se renderizan (`garantia === 'recibo' ? <FormRecibo /> : <FormGarantiaFisica />`), así que no bloquean el envío. El mensaje tampoco los incluye, porque solo recorre `CAMPOS[garantia]`.
- `npm run lint`: sin errores. `npm run build`: compila bien.
- No se probó en el navegador ni se abrió WhatsApp de verdad.

---

## 2026-11-02 — Ajustes al formulario: Veraz y garantía física

**Pedido:** agregar la pregunta "¿Tenés deudas atrasadas informadas en el Veraz?" (Sí / No) después de los campos de cada garantía y antes del botón de envío. En garantía física, sacar "Tipo de bien" y "Valor estimado del bien", y cambiar el nombre de "Descripción del bien" a "¿Qué tenés como garantía?".

**Antes de empezar:** en `src/config.js` ya estaban cargados el nombre real de la marca (`Tio Rico`) y el número de WhatsApp. No se tocaron.

### Archivos modificados

| Archivo | Cambio |
|---|---|
| `src/config.js` | En `CAMPOS.fisica` se sacaron `tipoBien` y `valorBien`. `descripcionBien` ahora se llama "¿Qué tenés como garantía?" y pasó a ser obligatorio, porque es el único campo propio de esa garantía. Se agregó `CAMPOS.finales` con la pregunta del Veraz (`veraz`, opciones Sí / No, obligatoria). |
| `src/components/Campo.jsx` | Nuevo tipo de campo `radio`: un grupo de opciones con su pregunta como título. |
| `src/components/FormSolicitud.jsx` | Muestra `CAMPOS.finales` después de los campos de la garantía elegida, en los dos tipos de garantía. La respuesta se suma al mensaje de WhatsApp. |
| `src/App.css` | Estilos del grupo de radio: cada opción es una pastilla y la elegida se marca en verde. |

### Verificación
- `npm run lint`: sin errores.
- `npm run build`: compila bien.
- No se probó en el navegador.

---

## 2026-11-01 — Resto de las secciones de la landing

**Pedido:** seguir avanzando con el diseño.

**Qué se hizo:** se implementaron todas las secciones de `docs/referencia.html` que faltaban: banner, requisitos, carrusel de reseñas, formulario y footer. La landing queda completa con placeholders. Todo el contenido que tienen que pasar los prestamistas se edita en `src/config.js`.

### Archivos creados o modificados

| Archivo | Cambio |
|---|---|
| `src/config.js` | **Ampliado.** Se agregaron: `WHATSAPP` (número que recibe las solicitudes), `BANNER` (textos e imagen), `REQUISITOS` (lista por tipo de garantía), `RESENIAS` (rutas de las capturas) y `CAMPOS` (definición de los campos de cada formulario). |
| `src/components/Placeholder.jsx` | **Nuevo.** Recuadro punteado para imágenes que todavía no llegaron. Lo usan el banner y las reseñas. |
| `src/components/Banner.jsx` | **Nuevo.** Título, texto, botones "Quiero mi préstamo" y "Ver requisitos", e imagen (o placeholder si `BANNER.imagen` es `null`). |
| `src/components/Requisitos.jsx` | **Nuevo.** Dos tarjetas (recibo de sueldo y garantía física) con ícono y la lista que sale de `REQUISITOS`. |
| `src/components/Resenias.jsx` | **Nuevo.** Carrusel con flechas y puntos clickeables. Si `RESENIAS` está vacío muestra 3 placeholders. |
| `src/components/Campo.jsx` | **Nuevo.** Dibuja un campo (input, select o textarea) a partir de su definición en `CAMPOS`. |
| `src/components/FormRecibo.jsx` | **Nuevo.** Campos extra para recibo de sueldo (`CAMPOS.recibo`). |
| `src/components/FormGarantiaFisica.jsx` | **Nuevo.** Campos extra para garantía física (`CAMPOS.fisica`). |
| `src/components/FormSolicitud.jsx` | **Nuevo.** Selector de garantía, campos comunes y los campos del tipo elegido. Al enviar arma un mensaje con cada dato (etiqueta: valor) y abre `wa.me/<WHATSAPP>` en una pestaña nueva. Los campos marcados `required` hay que completarlos antes de enviar. |
| `src/components/Footer.jsx` | **Nuevo.** Nombre de la marca y link al WhatsApp. No estaba en la lista original de componentes pero sí en la referencia. |
| `src/App.jsx` | Ahora muestra todas las secciones en orden: Navbar, Banner, Requisitos, Reseñas, Formulario y Footer. |
| `src/App.css` | Se agregaron los estilos de todas las secciones (tomados de la referencia) y ajustes para celular. Los estilos del formulario quedan acotados a `.form-solicitud`. Las secciones tienen `scroll-margin-top` para que el navbar fijo no tape los títulos al navegar con los enlaces. |

### Verificación
- `npm run lint`: sin errores.
- `npm run build`: compila bien.
- No se probó en el navegador ni se probó el envío real a WhatsApp.

### Pendiente
- Cargar en `src/config.js` el número real de `WHATSAPP` (ahora es `5490000000000`), los requisitos, la imagen del banner y las capturas de reseñas.
- Confirmar con ellos los campos de cada formulario (`CAMPOS`), que por ahora son la propuesta de la referencia.

---

## 2026-11-01 — Componente Navbar

**Pedido:** desarrollar el componente navbar.

**Punto de partida:** todos los archivos de `src/` estaban vacíos. `App.jsx` solo tenía `return`, así que el proyecto no compilaba. Se usó `docs/referencia.html` como guía de diseño.

### Archivos creados o modificados

| Archivo | Cambio |
|---|---|
| `src/components/Navbar.jsx` | **Nuevo.** Navbar con logo y nombre de la marca, enlaces a Requisitos y Reseñas, y botón "Solicitar préstamo". Queda fijo arriba al hacer scroll. En pantallas de 720px o menos muestra un botón de menú (hamburguesa) que abre los enlaces en columna. El menú se cierra al tocar un enlace. |
| `src/config.js` | **Nuevo.** Datos editables sin tocar componentes: `MARCA` (nombre y ruta del logo), `NAV_LINKS` (enlaces del menú) y `CTA` (botón de solicitud). Si `MARCA.logo` es `null`, se ve un recuadro punteado con el texto "LOGO". |
| `src/index.css` | **Nuevo.** Estilos globales sacados de la referencia: variables de color, tipografía Manrope, `.container` y botones (`.btn`, `.btn-primary`, `.btn-outline`). Los reutilizan todos los componentes. |
| `src/App.css` | **Nuevo.** Estilos del navbar, incluido el comportamiento en celular. |
| `src/App.jsx` | **Reescrito.** Ahora importa `App.css` y muestra `<Navbar />`. |
| `index.html` | Idioma cambiado a `es`, carga de la fuente Manrope desde Google Fonts y título "Préstamos personales". |

### Verificación
- `npm run lint`: sin errores.
- `npm run build`: compila bien.
- No se probó en el navegador.

### Pendiente
- Reemplazar `MARCA.nombre` y `MARCA.logo` en `src/config.js` cuando los prestamistas pasen el material (el logo va en `public/`).
- Los enlaces apuntan a `#requisitos`, `#resenas` y `#solicitar`. Van a funcionar cuando esas secciones existan con esos `id`.
