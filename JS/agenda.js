document.write('Una agenda');
let seguir = true;
let datos = [];
let contactos = [];

while (seguir) {
    let opcion = parseInt(prompt('Escoge una opción \n 1:Agregar \n 2:Listar \n 3:Salir'));
    switch (opcion) {
        case 1:
            alert('Escogiste la opción 1');
            let id = parseInt(contactos.length + 1);
            let nombre = prompt('Nombre:');
            let telefono = parseInt(prompt('Teléfono:'));
            let edad = parseInt(prompt('Edad:'));
            let nuevoContacto = {
                id: id,
                nombre: nombre,
                telefono: telefono,
                edad: edad
            };
            contactos.push(nuevoContacto);
            console.table(contactos);
            alert('Contacto agregado con éxito');
            break;
        case 2:
            let lista = "";
            for (let i = 0; i < contactos.length; i++) {
                lista += "Id: " + contactos[i].id + "\n";
                lista += "Nombre: " + contactos[i].nombre + "\n";
                lista += "Teléfono: " + contactos[i].telefono + "\n";
                lista += "Edad: " + contactos[i].edad + "\n";
            }
            if (contactos.length === 0) {
                alert('La agenda está vacía');
            } else {
                alert(lista);
            }
            break;
        case 3:
            alert('Escogiste salir');
            seguir = false;
            break;

        //case 4:
        default:
            alert('No recibí una opción válida')
    }
}