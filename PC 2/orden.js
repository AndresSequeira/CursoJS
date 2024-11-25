
const orders = [];

let option;
do {
    // Mostrar el menú directamente en el prompt
    option = parseInt(prompt(
        "\n--- Menú de Gestión de Órdenes ---\n" +
        "1. Agregar orden\n" +
        "2. Eliminar orden\n" +
        "3. Listar órdenes\n" +
        "4. Filtrar por número de pedido\n" +
        "5. Salir\n" +
        "Selecciona una opción: "
    ));

    switch (option) {
        case 1: {
            let number;
            do {
                // Validar que sea un número válido
                number = prompt("Número de pedido (solo números): ");
                if (isNaN(number) || number.trim() === "") {
                    prompt("Por favor, ingresa un valor válido.");
                } else {
                    number = parseInt(number);
                }
            } while (isNaN(number));

            let item;
            do {
                item = prompt("Nombre del artículo: ");
                if (item.trim() === "") {
                    prompt("El nombre del artículo no puede estar vacío.");
                }
            } while (item.trim() === ""); // Repetir mientras esté vacío

            let quantity;
            do {
                // Validar que sea un número válido
                quantity = prompt("Cantidad (solo números): ");
                if (isNaN(quantity) || quantity.trim() === "") {
                    prompt("Por favor, ingresa un valor válido.");
                } else {
                    quantity = parseInt(quantity);
                }
            } while (isNaN(quantity));

            let price;
            do {
                // Validar que sea un número válido
                price = prompt("Precio por unidad (solo números): ");
                if (isNaN(price) || price.trim() === "") {
                    prompt("Por favor, ingresa un valor válido.");
                } else {
                    price = parseFloat(price);
                }
            } while (isNaN(price));

            orders.push({ number, item, quantity, price });
            prompt(`Orden agregada:\nNúmero: ${number}\nArtículo: ${item}\nCantidad: ${quantity}\nPrecio: $${price.toFixed(2)}`);
            break;
        }

        case 2: {
            if (orders.length === 0) {
                prompt("No hay órdenes disponibles para eliminar.");
            } else {
                let removeNumber;
                do {
                    removeNumber = prompt("Número de pedido a eliminar: ");
                    if (isNaN(removeNumber) || removeNumber.trim() === "") {
                        prompt("Por favor, ingresa un valor válido.");
                    } else {
                        removeNumber = parseInt(removeNumber);
                    }
                } while (isNaN(removeNumber));

                const index = orders.findIndex(order => order.number === removeNumber);
                if (index !== -1) {
                    orders.splice(index, 1);
                    prompt(`Orden con número ${removeNumber} eliminada.`);
                } else {
                    prompt(`Orden con número ${removeNumber} no encontrada.`);
                }
            }
            break;
        }

        case 3: {
            if (orders.length === 0) {
                prompt("No hay órdenes disponibles.");
            } else {
                let totalAmount = 0;
                let orderList = "Órdenes:\n";

                for (const order of orders) {
                    const total = (order.quantity * order.price).toFixed(2);
                    totalAmount += parseFloat(total);

                    orderList += `Número: ${order.number}, Artículo: ${order.item}, Cantidad: ${order.quantity}, Precio unitario: $${order.price.toFixed(2)}, Total: $${total}\n`;
                }

                // Calcular descuento
                let descuento = 0;
                const size = orders.length;

                switch (true) {
                    case size > 7:
                        descuento = totalAmount * 0.15; // 15% de descuento
                        break;
                    case size > 5:
                        descuento = totalAmount * 0.10; // 10% de descuento
                        break;
                    case size > 3:
                        descuento = totalAmount * 0.05; // 5% de descuento
                        break;
                    default:
                        descuento = 0; // Sin descuento
                        break;
                }

                const totalFinal = totalAmount - descuento;

                orderList += `\nResumen:\nTotal sin descuento: $${totalAmount.toFixed(2)}\n`;
                orderList += `Descuento aplicado: $${descuento.toFixed(2)}\n`;
                orderList += `Total a pagar: $${totalFinal.toFixed(2)}\n`;

                prompt(orderList);
            }
            break;
        }

        case 4: {
            if (orders.length === 0) {
                prompt("No hay órdenes disponibles para buscar.");
            } else {
                let filterNumber;
                do {
                    filterNumber = prompt("Número de pedido a buscar: ");
                    if (isNaN(filterNumber) || filterNumber.trim() === "") {
                        prompt("Por favor, ingresa un valor válido.");
                    } else {
                        filterNumber = parseInt(filterNumber);
                    }
                } while (isNaN(filterNumber));

                const order = orders.find(order => order.number === filterNumber);
                if (order) {
                    const total = (order.quantity * order.price).toFixed(2);
                    prompt(`Orden encontrada:\nNúmero: ${order.number}\nArtículo: ${order.item}\nCantidad: ${order.quantity}\nPrecio unitario: $${order.price.toFixed(2)}\nTotal: $${total}`);
                } else {
                    prompt(`Orden con número ${filterNumber} no encontrada.`);
                }
            }
            break;
        }

        case 5:
            prompt("Saliendo del programa...");
            break;

        default:
            prompt("Opción no válida, intenta de nuevo.");
            break;
    }
} while (option !== 5);
