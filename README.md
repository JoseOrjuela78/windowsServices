# windowsServices
app para crear app como servicio de windows npm node-windows

# se debe actualizar em index.js
  name: 'CotizadorCIE',
  description: 'Cotizador de Node.js en Windows',
  script: 'C:\\ruta\\a\\tu\\archivo\\app.js', // Ruta absoluta al archivo app.js
  
# para crear e iniciar servicio en windows

  node index.js install

# para borrar y cancelar servicio en windows

  node index.js uninstall

