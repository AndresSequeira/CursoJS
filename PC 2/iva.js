class CalculadoraIVA {
    constructor() {
        this.importe = 0;
        this.tipoIVA = '';
    }

    // Método para obtener los datos del usuario
    obtenerDatos() {
        this.importe = parseFloat(prompt("Ingrese el importe de la compra:"));
        this.tipoIVA = prompt("Ingrese el tipo de IVA (básico, reducido, superreducido):").toLowerCase();
    }

    // Método para calcular el IVA
    calcularTotalConIVA() {
        // Normalizar entrada para evitar problemas con tildes
        const tipoIVANormalizado = this.tipoIVA.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
        let porcentajeIVA;
    
        switch (tipoIVANormalizado) {
            case "basico":
                porcentajeIVA = 10;
                break;
            case "reducido":
                porcentajeIVA = 5;
                break;
            case "superreducido":
                porcentajeIVA = 2;
                break;
            default:
                alert("Tipo de IVA no válido. Use: básico, reducido o superreducido.");
                console.error("Tipo de IVA no válido.");
                return null;
        }
    
        const totalConIVA = this.importe + (this.importe * (porcentajeIVA / 100));
        return totalConIVA;
    }
    

    // Método principal para ejecutar el programa
    ejecutar() {
        this.obtenerDatos();
        const total = this.calcularTotalConIVA();
        if (total !== null) {
            alert(`El total con IVA incluido es: ${total.toFixed(2)} €`);
            console.log(`El total con IVA incluido es: ${total.toFixed(2)} €`);
        }
    }
}

// Crear una instancia de la clase y ejecutar el programa
const calculadora = new CalculadoraIVA();
calculadora.ejecutar();
