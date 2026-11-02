// Datos de la marca: reemplazar cuando pasen el material.
export const MARCA = {
  nombre: 'Tio Rico',
  // Ruta al logo dentro de /public (ej: '/logo.svg'). Mientras sea null se muestra un placeholder.
  logo: '/Logo.jpeg',
}

// Número que recibe las solicitudes: código de país + área + número, sin "+", espacios ni guiones.
export const WHATSAPP = '5491124619328'

export const INSTAGRAM = 'https://instagram.com/prestamostiorico'

// Enlaces del navbar: cada href apunta al id de una sección.
export const NAV_LINKS = [
  { href: '#requisitos', texto: 'Requisitos' },
  { href: '#galeria', texto: 'Conocé Tío Rico' },
]

export const CTA = { href: '#solicitar', texto: 'Solicitar préstamo' }

export const BANNER = {
  eyebrow: 'Préstamos personales',
  titulo: 'Dinero cuando lo necesitás, sin vueltas.',
  texto: 'Con recibo de sueldo o con garantía. Dejanos tus datos y te contactamos por WhatsApp.',
  // Ruta a la imagen dentro de /public. Mientras sea null se muestra un placeholder.
  imagen: '/Banner.jpeg',
}

// Requisitos de cada tipo de préstamo (a confirmar con ellos).
export const REQUISITOS = {
  recibo: ['DNI vigente', 'No estar en el veraz', 'Servicio de a tu nombre'],
  fisica: ['DNI vigente', 'Garantía física que cubra el valor del credito'],
}

// Sección "Nos ves en la calle". Imagen dentro de /public; si no existe se muestra un placeholder.
export const PRESENCIA = {
  titulo: 'Nos ves en la calle',
  texto: 'Formamos parte de la calle todos los días. Si viste nuestro cartel en el colectivo, ya nos conocés.',
  zonas: 'Atendemos en CABA, AMBA, Mar del plata y Córdoba',
  imagen: '/NosVesEnLaCalle.jpeg',
  alt: 'Colectivo con la publicidad de Préstamos Tío Rico frente a la Legislatura porteña',
}

// Galería con pestañas. tipo: 'imagen' | 'video'. Archivos dentro de /public.
// Si un archivo todavía no existe se muestra un placeholder. Una pestaña sin items no se muestra.
export const GALERIA = [
  {
    clave: 'procesos',
    titulo: 'Nuestros procesos',
    items: [
      { tipo: 'video', src: '/galeria/procesos/garantia-video.mp4', poster: '/galeria/procesos/video-poster.jpg', alt: 'Cómo es el proceso de un préstamo' },
      { tipo: 'imagen', src: '/galeria/procesos/comprobante-pago.jpeg', alt: 'Préstamo con garantía física' },
      { tipo: 'imagen', src: '/galeria/procesos/garantia-fisica-1.jpg', alt: 'Chat de un préstamo con garantía física: contrato y préstamo pre aprobado' },
      { tipo: 'imagen', src: '/galeria/procesos/garantia-fisica-2.jpg', alt: 'Chat de un préstamo con garantía física: contrato y préstamo pre aprobado' },
      { tipo: 'imagen', src: '/galeria/procesos/garantia-fisica-3.jpg', alt: 'Chat de un préstamo con garantía física: contrato firmado y préstamo pre aprobado' },
    ],
  },
  {
    clave: 'clientes',
    titulo: 'Nuestros clientes',
    items: [
      { tipo: 'imagen', src: '/galeria/clientes/prestamo-tv.jpeg', alt: 'Mensaje de un cliente' },
      { tipo: 'imagen', src: '/galeria/clientes/prestamo-consola.jpeg', alt: 'Mensaje de un cliente' },
    ],
  },
]

// Tipos de garantía que se eligen en el formulario. La clave coincide con la de CAMPOS.
export const GARANTIAS = [
  { clave: 'recibo', texto: 'Recibo de sueldo' },
  { clave: 'fisica', texto: 'Garantía física' },
]

// Campos de cada formulario (propuesta, confirmar con ellos).
// type: 'text' | 'tel' | 'select' | 'textarea' | 'radio'. full: ocupa todo el ancho.
// icono y etiquetaMensaje: cómo aparece el campo en el mensaje de WhatsApp (sin etiquetaMensaje se usa label).
// finales: van después de los campos de la garantía elegida, en los dos formularios.
export const CAMPOS = {
  comunes: [
    { name: 'nombre', label: 'Nombre y apellido', required: true, icono: '👤', etiquetaMensaje: 'Nombre' },
    { name: 'dni', label: 'DNI', inputMode: 'numeric', required: true, icono: '🪪' },
    { name: 'telefono', label: 'Teléfono (WhatsApp)', type: 'tel', required: true, icono: '📱', etiquetaMensaje: 'Teléfono' },
    { name: 'monto', label: 'Monto que necesitás', inputMode: 'numeric', required: true, icono: '💰', etiquetaMensaje: 'Monto' },
  ],
  recibo: [
    { name: 'empleador', label: 'Empleador', required: true, icono: '🏢' },
    { name: 'antiguedad', label: 'Antigüedad laboral', required: true, icono: '⏳', etiquetaMensaje: 'Antigüedad' },
    { name: 'ingreso', label: 'Ingreso neto mensual', inputMode: 'numeric', required: true, icono: '💵', etiquetaMensaje: 'Ingreso neto' },
  ],
  fisica: [
    { name: 'descripcionBien', label: '¿Qué tenés como garantía?', type: 'textarea', full: true, required: true, icono: '🏠', etiquetaMensaje: 'Garantía' },
  ],
  finales: [
    { name: 'veraz', label: '¿Tenés deudas atrasadas informadas en el Veraz?', type: 'radio', opciones: ['Sí', 'No'], full: true, required: true, icono: '📊', etiquetaMensaje: 'Deudas en Veraz' },
  ],
}
