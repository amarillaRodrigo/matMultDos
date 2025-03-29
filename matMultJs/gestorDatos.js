const prompt = require("prompt-sync")({ sigint: true });

function mostrarMenu() {
    console.log("\nMenú de Opciones:");
    console.log("1. Ingresar nueva persona");
    console.log("2. Mostrar todos los datos");
    console.log("3. Filtrar por DNI");
    console.log("4. Salir");
}

function ingresarPersona(matriz) {
    const nombre = prompt("Ingrese el nombre: ");
    const apellido = prompt("Ingrese el apellido: ");
    const dni = prompt("Ingrese el DNI: ");
    const telefonos = prompt("Ingrese los teléfonos separados por comas: ").split(",");
    const hijos = prompt("Ingrese los nombres de los hijos separados por comas: ").split(",");
    matriz.push([nombre, apellido, dni, telefonos, hijos]);
}

function mostrarDatos(matriz) {
    console.log("\nDatos ingresados:");
    matriz.forEach(persona => console.log(persona));
    console.log("\nListado detallado:");
    matriz.forEach(persona => {
        console.log(`Nombre: ${persona[0]} ${persona[1]}, DNI: ${persona[2]}`);
        console.log(`Teléfonos (${persona[3].length}): ${persona[3].join(", ")}`);
        console.log(`Hijos (${persona[4].length}): ${persona[4].join(", ")}`);
    });
}

function filtrarPorDNI(matriz) {
    const dni = prompt("Ingrese el DNI a buscar: ");
    const persona = matriz.find(p => p[2] === dni);
    if (persona) {
        console.log(`\nDatos de la persona con DNI ${dni}:`);
        console.log(`Nombre: ${persona[0]} ${persona[1]}`);
        console.log(`Teléfonos (${persona[3].length}): ${persona[3].join(", ")}`);
        console.log(`Hijos (${persona[4].length}): ${persona[4].join(", ")}`);
    } else {
        console.log("No se encontró una persona con ese DNI.");
    }
}

function main() {
    const matriz = [];
    while (true) {
        mostrarMenu();
        const opcion = prompt("Seleccione una opción: ");
        if (opcion === "1") {
            ingresarPersona(matriz);
        } else if (opcion === "2") {
            mostrarDatos(matriz);
        } else if (opcion === "3") {
            filtrarPorDNI(matriz);
        } else if (opcion === "4") {
            console.log("Saliendo del programa...");
            break;
        } else {
            console.log("Opción no válida. Intente nuevamente.");
        }
    }
}

main();