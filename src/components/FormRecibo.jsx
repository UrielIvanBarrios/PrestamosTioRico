import { CAMPOS } from '../config'
import Campo from './Campo'

// Campos que se agregan cuando la garantía es recibo de sueldo.
function FormRecibo() {
  return CAMPOS.recibo.map((campo) => <Campo key={campo.name} {...campo} />)
}

export default FormRecibo
