const productos = [
    { nombre: "Zanella RX150", precio: 105.999 },
    { nombre: "Harley Davidson", precio: 125.692 },
    { nombre: "Kawasaki Ninja 650", precio: 220.000 }
];

let carrito = []

let seleccion = prompt("Hola, Deseas Comprar una moto?")

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor ingrese su respuesta, solo si o no")
    seleccion = prompt("Hola, desea comprar una moto?")
}

if (seleccion == "si") {
    alert("Aquí te enseñamos lo disponible")
    let todosLosProductos = productos.map((productos) => productos.nombre + " " + productos.precio + "$")
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias por Visitarnos")
}

while (seleccion != "no"){
    let productos = prompt ("Agrega un producto a tu carrito")
    let precio = 0

    if(productos == "Zanella RX150" || productos == "Harley Davidson" || productos == "Kawasaki Ninja 650"){
        switch(productos){
            case "Zanella RX150":
             precio = 105.999
             break
            case "Harley Davidson":
             precio = 125.692
             break
            case "Kawasaki Ninja 650":
             precio = 220.000
             break
            default:
             break
        }
        let unidades = parseInt(prompt("Quieres llevar mas de una? Por favor ingresa un númeto"))

        carrito.push({productos, unidades, precio})
        console.log(carrito)
    } else{
     alert("No Disponemos de ese modelo ahora mismo")
    }
 seleccion = prompt("Desea seguir compramdo?")

 while(seleccion == "no"){
    alert("Gracias por la compra, hasta pronto!")
    carrito.forEach((carritoFinal) => {
     console.log (` producto: ${carritoFinal.productos}, unidades: ${carritoFinal.unidades},
     total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
    })
 break;
 }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log = alert(`el total a pagar por su compra es de: ${total} pesos`)
alert("Gracias Por comprar aquí.")