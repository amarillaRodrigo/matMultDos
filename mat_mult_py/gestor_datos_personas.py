def mostrar_menu():
    print("\nMenú de Opciones:")
    print("1. Ingresar nueva persona")
    print("2. Mostrar todos los datos")
    print("3. Filtrar por DNI")
    print("4. Salir")

def ingresar_persona(matriz):
    nombre = input("Ingrese el nombre: ")
    apellido = input("Ingrese el apellido: ")
    dni = input("Ingrese el DNI: ")
    telefonos = input("Ingrese los teléfonos separados por comas: ").split(",")
    hijos = input("Ingrese los nombres de los hijos separados por comas: ").split(",")
    matriz.append([nombre, apellido, dni, telefonos, hijos])

def mostrar_datos(matriz):
    print("\nDatos ingresados:")
    for persona in matriz:
        print(persona)
    print("\nListado detallado:")
    for persona in matriz:
        print(f"Nombre: {persona[0]} {persona[1]}, DNI: {persona[2]}")
        print(f"Teléfonos ({len(persona[3])}): {', '.join(persona[3])}")
        print(f"Hijos ({len(persona[4])}): {', '.join(persona[4])}")

def filtrar_por_dni(matriz):
    dni = input("Ingrese el DNI a buscar: ")
    for persona in matriz:
        if persona[2] == dni:
            print(f"\nDatos de la persona con DNI {dni}:")
            print(f"Nombre: {persona[0]} {persona[1]}")
            print(f"Teléfonos ({len(persona[3])}): {', '.join(persona[3])}")
            print(f"Hijos ({len(persona[4])}): {', '.join(persona[4])}")
            return
    print("No se encontró una persona con ese DNI.")

def main():
    matriz = []
    while True:
        mostrar_menu()
        opcion = input("Seleccione una opción: ")
        if opcion == "1":
            ingresar_persona(matriz)
        elif opcion == "2":
            mostrar_datos(matriz)
        elif opcion == "3":
            filtrar_por_dni(matriz)
        elif opcion == "4":
            print("Saliendo del programa...")
            break
        else:
            print("Opción no válida. Intente nuevamente.")

if __name__ == "__main__":
    main()