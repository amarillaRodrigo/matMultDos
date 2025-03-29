# Gestión de Personas con Matriz Multidimensional

Este proyecto contiene dos implementaciones (en Python y JavaScript) de un programa interactivo que permite gestionar datos de personas almacenados en una matriz multidimensional. Los datos incluyen nombre, apellido, DNI, una lista de teléfonos y una lista de hijos.

## Estructura de la Matriz
Cada persona se almacena en la matriz con el siguiente formato:

[nombre, apellido, DNI, [teléfono1, teléfono2, ...], [hijo1, hijo2, ...]]

### Ejemplo:

["Juan", "Pérez", "25256699", ["3704554466", "3704552233"], ["Juan Jr.", "María"]]


## Funcionalidades
El programa ofrece las siguientes opciones a través de un menú interactivo:

1. **Ingresar nueva persona**: Permite al usuario ingresar los datos de una nueva persona.
2. **Mostrar todos los datos**: Muestra todos los datos ingresados, incluyendo la cantidad de teléfonos e hijos de cada persona.
3. **Filtrar por DNI**: Permite buscar y mostrar los datos de una persona específica por su DNI.
4. **Salir**: Finaliza la ejecución del programa.

## Archivos Incluidos
- **Python**: `menu.py`
- **JavaScript**: `menu.js`

## Requisitos

### Python
- Python 3.x instalado.
- No se requieren librerías adicionales.

### JavaScript
- Node.js instalado.
- Librería `prompt-sync` para la entrada de datos. Instalar con:
  ```bash
  npm install prompt-sync

# Uso

## Python

Ejecuta el archivo menu.py:
Sigue las instrucciones del menú interactivo.

## JavaScript
1.Instala la dependencia prompt-sync si no lo has hecho:
2.Ejecuta el archivo menu.js:
3.Sigue las instrucciones del menú interactivo.

### Ejemplo de Uso

#### Ingreso de Datos
El programa solicitará los siguientes datos:

Nombre: Ejemplo: Juan
Apellido: Ejemplo: Pérez
DNI: Ejemplo: 25256699
Teléfonos: Ingresar una lista separada por comas. Ejemplo: 3704554466,3704552233
Hijos: Ingresar una lista separada por comas. Ejemplo: Juan Jr.,María

#### Salida de Datos
El programa mostrará los datos ingresados en formato detallado, incluyendo la cantidad de teléfonos e hijos.

Filtrar por DNI
Al ingresar un DNI, el programa buscará y mostrará los datos de la persona correspondiente.



