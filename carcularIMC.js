class CalculadoraIMC {
    constructor() {
        this.peso = 0;
        this.altura = 0;
    }

    // Método para obtener datos del usuario
    obtenerDatos() {
        this.peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
        this.altura = parseFloat(prompt("Ingrese su altura en metros:"));
    }

    // Método para calcular el IMC
    calcularIMC() {
        if (this.altura > 0) {
            return this.peso / (this.altura * this.altura);
        } else {
            console.error("La altura debe ser mayor que cero.");
            return null;
        }
    }

    // Método para determinar la categoría del IMC
    determinarCategoria(imc) {
        if (imc < 18.5) {
            return "Bajo peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            return "Normal";
        } else if (imc >= 25 && imc < 29.9) {
            return "Sobrepeso";
        } else if (imc >= 30) {
            return "Obesidad";
        } else {
            return "IMC no válido";
        }
    }

    // Método principal para ejecutar el programa
    ejecutar() {
        this.obtenerDatos();
        const imc = this.calcularIMC();
        if (imc !== null) {
            const categoria = this.determinarCategoria(imc);
            alert(`Su IMC es ${imc.toFixed(2)} y su categoría es: ${categoria}`);
            console.log(`Su IMC es ${imc.toFixed(2)} y su categoría es: ${categoria}`);
        }
    }
}

// Crear una instancia de la clase y ejecutar el programa
const calculadoraIMC = new CalculadoraIMC();
calculadoraIMC.ejecutar();
