class CalculadoraDescuento {
    constructor() {
        this.totalCompra = 0;
        this.codigoDescuento = '';
    }

    // Método para obtener los datos del usuario
    obtenerDatos() {
        this.totalCompra = parseFloat(prompt("Ingrese el total de su compra:"));
        this.codigoDescuento = prompt("Ingrese su código de descuento (si tiene):").toUpperCase();
    }

    // Método para calcular el total después de aplicar el descuento
    calcularTotalConDescuento() {
        let porcentajeDescuento = 0;

        // Verificar el código de descuento
        switch (this.codigoDescuento) {
            case "DESCUENTO10":
                porcentajeDescuento = 10;
                break;
            case "DESCUENTO20":
                porcentajeDescuento = 20;
                break;
            case "":
                porcentajeDescuento = 0;
                break;
            default:
                alert("El código de descuento no es válido.");
                console.error("Código de descuento no válido.");
                return null;
        }

        // Calcular el total con el descuento aplicado
        const descuento = (this.totalCompra * porcentajeDescuento) / 100;
        const totalConDescuento = this.totalCompra - descuento;
        return totalConDescuento;
    }

    // Método principal para ejecutar el programa
    ejecutar() {
        this.obtenerDatos();
        const total = this.calcularTotalConDescuento();
        if (total !== null) {
            if (this.codigoDescuento === "") {
                alert(`No se aplicó ningún descuento. Su total es: ${this.totalCompra.toFixed(2)} €`);
                console.log(`No se aplicó ningún descuento. Su total es: ${this.totalCompra.toFixed(2)} €`);
            } else {
                alert(`El total después de aplicar el descuento es: ${total.toFixed(2)} €`);
                console.log(`El total después de aplicar el descuento es: ${total.toFixed(2)} €`);
            }
        }
    }
}

// Crear una instancia de la clase y ejecutar el programa
const calculadora = new CalculadoraDescuento();
calculadora.ejecutar();
