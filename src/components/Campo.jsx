// Un campo del formulario a partir de su definición en CAMPOS (config.js).
function Campo({ name, label, type = 'text', inputMode, required, opciones, full, rows = 3 }) {
  if (type === 'radio') {
    return (
      <fieldset className={`radio-group${full ? ' full' : ''}`}>
        <legend>{label}</legend>
        <div className="radio-opciones">
          {opciones.map((op) => (
            <label key={op} className="radio">
              <input type="radio" name={name} value={op} required={required} />
              {op}
            </label>
          ))}
        </div>
      </fieldset>
    )
  }

  let control
  if (type === 'select') {
    control = (
      <select name={name} required={required}>
        {opciones.map((op) => <option key={op}>{op}</option>)}
      </select>
    )
  } else if (type === 'textarea') {
    control = <textarea name={name} rows={rows} required={required} />
  } else {
    control = <input type={type} name={name} inputMode={inputMode} required={required} />
  }

  return (
    <label className={full ? 'full' : undefined}>
      {label}
      {control}
    </label>
  )
}

export default Campo
