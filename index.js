const Service = require('node-windows').Service;

// Crea un nuevo objeto de servicio
const svc = new Service({
    name: 'CotizadorCIE',
    description: 'Cotizador de Node.js en Windows',
    //script: 'C:\\ruta\\a\\tu\\archivo\\app.js', // Ruta absoluta al archivo app.js
    script: 'C:\\Users\\alfre\\OneDrive\\Documentos\\MarioArenas\\cotizadorCIE\\app.js', // Ruta absoluta al archivo app.js
    env: { // Variables de entorno que deseas utilizar en el servicio
        JWT_KEY: 'C13C0L0M814_C07', // Ejemplo de variable de entorno
        PORT: 3005, // Ejemplo de otra variable de entorno
        // Agrega aquí otras variables de entorno si las necesitas
    }
});

// Eventos del servicio
svc.on('install', () => {
    svc.start();
});

svc.on('uninstall', () => {
    console.log('Servicio desinstalado.');
});

// Instala el servicio
if (process.argv[2] === 'install') {
    svc.install();
} else if (process.argv[2] === 'uninstall') {
    svc.uninstall();
} else {
    console.log('Comandos válidos: install o uninstall');
}