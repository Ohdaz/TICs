document.write('Una agenda');
let seguir = true;
let datos = [];

while (seguir) {
    let opcion = parseInt(prompt('Escoge una opción \n 1:Agregar \n 2:Listar \n 3:Salir'));
    switch (opcion) {
        case 1:
            alert('Escogiste la opción 1');
            let nombre = prompt('Nombre:');
            let apellidos = prompt('Apellidos:');
            let facultad = prompt('Facultad:');
            let telefono = parseInt(prompt('Teléfono:'));
            let edad = parseInt(prompt('Edad:'));
            let nuevoContacto = {
                nombre: nombre,
                apellidos: apellidos,
                facultad: facultad,
                telefono: telefono,
                edad: edad
            };
            datos.push(nuevoContacto)
            console.table(datos)
            alert('Contacto agregado con éxito');
            break;
        case 2:
            if (datos.length === 0) {
                alert('La agenda está vacía');
            } else {
                alert('Escogiste la opción 2');
            }
            break;
        case 3:
            alert('Escogiste salir');
            seguir = false;
            break;
        default:
            alert('No recibí una opción válida')
    }
}