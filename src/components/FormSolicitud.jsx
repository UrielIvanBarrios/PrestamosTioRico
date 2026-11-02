import { useState } from 'react'
import { CAMPOS, GARANTIAS, MARCA } from '../config'
import { armarMensaje, abrirWhatsApp } from '../utils/whatsapp'
import Campo from './Campo'
import Selector from './Selector'
import FormRecibo from './FormRecibo'
import FormGarantiaFisica from './FormGarantiaFisica'

function FormSolicitud() {
  const [garantia, setGarantia] = useState('recibo')

  const enviar = (e) => {
    e.preventDefault()
    const datos = new FormData(e.currentTarget)
    abrirWhatsApp(armarMensaje(garantia, datos))
  }

  return (
    <section id="solicitar" className="section">
      <div className="container form-wrap">
        <div>
          <h2>Solicitá tu préstamo</h2>
          <p className="section-sub">Completá el formulario y te llega la consulta por WhatsApp.</p>
        </div>

        <fieldset>
          <legend>¿Qué tipo de garantía tenés?</legend>
          <Selector opciones={GARANTIAS} valor={garantia} onCambiar={setGarantia} />
        </fieldset>

        <form className="form-solicitud" onSubmit={enviar}>
          {CAMPOS.comunes.map((campo) => <Campo key={campo.name} {...campo} />)}
          {garantia === 'recibo' ? <FormRecibo /> : <FormGarantiaFisica />}
          {CAMPOS.finales.map((campo) => <Campo key={campo.name} {...campo} />)}
          <button type="submit" className="btn btn-primary submit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4z" /></svg>
            Enviar por WhatsApp
          </button>
        </form>
        <p className="disclaimer">
          Los datos que cargues se envían directamente a {MARCA.nombre} para contactarte.
          <br />
          <strong>Recordá adjuntar foto del DNI y de la garantía que selecciones.</strong>
        </p>
      </div>
    </section>
  )
}

export default FormSolicitud
