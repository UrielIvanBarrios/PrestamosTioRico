import { CAMPOS } from '../config'
import Campo from './Campo'

// Campos que se agregan cuando la garantía es un bien físico.
function FormGarantiaFisica() {
  return CAMPOS.fisica.map((campo) => <Campo key={campo.name} {...campo} />)
}

export default FormGarantiaFisica
