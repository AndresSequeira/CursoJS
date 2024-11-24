class VerificadorSubsidio {
    constructor() {
        this.edad = 0;
        this.ingresos = 0;
    }

    // Método para obtener datos del usuario
    obtenerDatos() {
        this.edad = parseInt(prompt("Ingrese su edad:"), 10);
        this.ingresos = parseFloat(prompt("Ingrese sus ingresos mensuales en euros:"));
    }

    // Método para verificar elegibilidad
    verificarElegibilidad() {
        if (this.edad >= 18 && this.ingresos >= 500 && this.ingresos <= 2000) {
            return true;
        }
        return false;
    }

    // Método principal para ejecutar el programa
    ejecutar() {
        this.obtenerDatos();
        const esElegible = this.verificarElegibilidad();
        if (esElegible) {
            alert("Usted es elegible para el subsidio.");
            console.log("Usted es elegible para el subsidio.");
        } else {
            alert("Usted no es elegible para el subsidio.");
            console.log("Usted no es elegible para el subsidio.");
        }
    }
}

// Crear una instancia de la clase y ejecutar el programa
const verificador = new VerificadorSubsidio();
verificador.ejecutar();
