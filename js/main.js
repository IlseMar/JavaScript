const productos = [
  {
    id: 1,
    category: "Computación",
    description: "Una computadora portátil con procesador Intel Core i7.",
    image: "https://via.placeholder.com/100",
    price: 1199.99,
    rating: {
      rate: 3.9,
      count: 120,
    },
    title: "Computadora Portátil",
  },
  {
    id: 2,
    category: "Computación",
    description: "Un monitor de 27 pulgadas con resolución 4K.",
    image: "https://via.placeholder.com/100",
    price: 399.99,
    rating: {
      rate: 3.9,
      count: 120,
    },
    title: "Monitor 4K",
  },
  {
    id: 3,
    category: "Computación",
    description: "Un teclado mecánico con retroiluminación RGB.",
    image: "https://via.placeholder.com/100",
    price: 89.99,
    rating: {
      rate: 3.9,
      count: 120,
    },
    title: "Teclado Mecánico",
  },
  {
    id: 4,
    category: "Computación",
    description: "Una impresora multifuncional con conexión WiFi.",
    image: "https://via.placeholder.com/100",
    price: 149.99,
    rating: {
      rate: 3.9,
      count: 120,
    },
    title: "Impresora Multifuncional",
  },
  {
    id: 5,
    category: "Telefonía",
    description: "Un smartphone de alta calidad con pantalla de 6.1 pulgadas.",
    image: "https://via.placeholder.com/100",
    price: 699.99,
    rating: {
      rate: 3.9,
      count: 120,
    },
    title: "Smartphone",
  },
  {
    id: 6,
    category: "Telefonía",
    description: "Un teléfono móvil con batería de larga duración.",
    image: "https://via.placeholder.com/100",
    price: 299.99,
    rating: {
      rate: 3.9,
      count: 120,
    },
    title: "Teléfono Móvil",
  },
  {
    id: 7,
    category: "Telefonía",
    description: "Un par de auriculares inalámbricos con cancelación de ruido.",
    image: "https://via.placeholder.com/100",
    price: 199.99,
    rating: {
      rate: 3.9,
      count: 120,
    },
    title: "Auriculares Inalámbricos",
  },
  {
    id: 8,
    category: "Telefonía",
    description: "Un cargador inalámbrico rápido para teléfonos móviles.",
    image: "https://via.placeholder.com/100",
    price: 49.99,
    rating: {
      rate: 3.9,
      count: 120,
    },
    title: "Cargador Inalámbrico",
  },
  {
    id: 9,
    category: "Accesorios",
    description: "Una funda resistente para tabletas de 10 pulgadas.",
    image: "https://via.placeholder.com/100",
    price: 29.99,
    rating: {
      rate: 3.9,
      count: 120,
    },
    title: "Funda para Tableta",
  },
  {
    id: 10,
    category: "Accesorios",
    description: "Un adaptador USB-C a HDMI para conectar dispositivos.",
    image: "https://via.placeholder.com/100",
    price: 19.99,
    rating: {
      rate: 3.9,
      count: 120,
    },
    title: "Adaptador USB-C a HDMI",
  },
];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const renderProducts = (arrayProductos) => {
  let containerProducts = document.getElementById("products-container");
  containerProducts.innerHTML = "";

  arrayProductos.forEach((producto) => {
    let productCard = document.createElement("div");
    productCard.className = "producto";
    productCard.innerHTML = `
    <img src=${producto.image}>
    <h2>${producto.title}</h2>
    <p>${producto.description}</p>
    <p class="price">${producto.price}</p>
    <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>`;
    containerProducts.appendChild(productCard);
  });
};
renderProducts(productos);

const agregarAlCarrito = (id) => {
  let producto = productos.find((elemento) => elemento.id === id);
  let productoEnElCarrito = carrito.find((elemento) => elemento.id === id);

  if (productoEnElCarrito) {
    productoEnElCarrito.quantity += 1;
    Swal.fire({
      title: "Su proucto se aumento uno más",
      icon: "success",
      position: "center",
      // showConfirmButton: false,
      confirmButtonText: "aceptar",
      timer: 1500,
    });
  } else {
    carrito.push({ ...producto, quantity: 1 });
    Swal.fire({
      title: "Se agregó exitosamente",
      icon: "success",
      position: "center",
      showConfirmButton: false,
      // confirmButtonText: "aceptar",
      timer: 1500,
    });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const inputSearch = document.getElementById("search");
if (inputSearch) {
  inputSearch.addEventListener("input", (evento) => {
    let value = evento.target.value.toLowerCase();
    let arraFiltrado = productos.filter((producto) =>
      producto.title.toLowerCase().includes(value)
    );
    renderProducts(arraFiltrado);
  });
}

console.log(carrito);
