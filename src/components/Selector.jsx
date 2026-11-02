// Fila de botones-pastilla donde una opción queda elegida (la elegida va en dorado).
// Sin panelId funciona como interruptor (aria-pressed). Con panelId funciona como pestañas
// (role="tablist" / role="tab" / aria-selected) que controlan el elemento con ese id.
function Selector({ opciones, valor, onCambiar, panelId, label }) {
  const esTabs = Boolean(panelId)

  return (
    <div className="selector" role={esTabs ? 'tablist' : undefined} aria-label={label}>
      {opciones.map((op) => {
        const elegida = valor === op.clave
        const aria = esTabs
          ? { role: 'tab', id: `${panelId}-tab-${op.clave}`, 'aria-selected': elegida, 'aria-controls': panelId }
          : { 'aria-pressed': elegida }
        return (
          <button key={op.clave} type="button" onClick={() => onCambiar(op.clave)} {...aria}>
            {op.texto}
          </button>
        )
      })}
    </div>
  )
}

export default Selector
