//DUMMY PRODUCTS (PRODUCT ID : DATA)

// fetch('http://localhost:8081/api/productos/%27)
//     .then(function(response){
//       response.json().then(function(productos){
//             for (let j = 0; j < productos.length; j++) {
//                 var cargar = productos[j];
//                 cargarProducto(cargar);
//               console.log(cargar);
//             }
//       })
//     })

var products = [
    {
      name: "Rosca",
      desc: "Ricas roscas de todos los sabores",
      tipo: "regular",
      img: "galleta1.jpg",
      price: 2034
    },
    {
      name: "Pan de muerto",
      desc: "Sabrocito con de temporada",
      tipo: "temporada",
      img: "Pan_de_muerto_tradicional.png",
      price: 1247
    },
    {
      name: "Ricos Buñuelos",
      desc: "Paquete con 4 buñuelos ",
      tipo: "damor_en_casa",
      img: "galleta1.jpg",
      price: 675
    },
    {
      name: "Masa de galletas",
      desc: "Rica masa para preparar en casa con amigos y familia",
      img: "galleta1.jpg",
      tipo: "regular",
      price: 842
    },
    /*pruebassssss*/
    {
      name: "prueba",
      desc: "Rica prueba c en casa con amigos y familia",
      img: "galleta1.jpg",
      tipo: "damor_en_casa",
      price: 842
    },
    {
      name: "prueba2",
      desc: "Javascript es lo máximo!!!",
      img: "Pan_de_muerto_tradicional.png",
      tipo: "temporada",
      price: 842
    }
  ];
  // fetch('http://localhost:8081/api/productos/')
  //   .then(function (response) {
  //     response.json().then(function (productos) {
  //       console.log(productos)
  //       for (let j = 0; j < productos.length; j++) {
  //         var subir_producto = productos[j];
  //         // añadirProducto(subir_producto);
  //       }
  //     })
  //   }); 