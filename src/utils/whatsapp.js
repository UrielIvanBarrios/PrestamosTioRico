import { CAMPOS, GARANTIAS, WHATSAPP } from '../config'

// Arma el texto recorriendo CAMPOS: si se agrega o saca un campo en config.js, el mensaje se actualiza solo.
export function armarMensaje(garantia, datos) {
  const tipo = GARANTIAS.find((g) => g.clave === garantia).texto
  const lineas = [...CAMPOS.comunes, ...CAMPOS[garantia], ...CAMPOS.finales].map((campo) => {
    const valor = datos.get(campo.name)?.trim() || '-'
    return `${campo.icono} *${campo.etiquetaMensaje ?? campo.label}:* ${valor}`
  })
  return ['📋 *Nueva solicitud de préstamo*', '', `🧾 *Tipo de garantía:* ${tipo}`, ...lineas].join('\n')
}

export function abrirWhatsApp(mensaje) {
  window.location.href = `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(mensaje)}`
}
