console.log("Sistema funcionando")
load();


function load(){
fetch('http://localhost:8081/api/productos/')
    .then(function(response){
      response.json().then(function(productos){
            for (let j = 0; j < productos.length; j++) {
                var cargar = productos[j];
                cargarProducto(cargar);
              console.log(cargar);
            }
      })
    });
  }


function cargarProducto(cargar){
    var idimagen=`imagen${cargar.tipo+cargar.id}`
    var idnombre=`nombre${cargar.tipo+cargar.id}`
    var iddescripcion=`descripcion${cargar.tipo+cargar.id}`
    var idtipo=`tipo${cargar.tipo+cargar.id}`
    var idprecio=`precio${cargar.tipo+cargar.id}`
    var idcantidad=`cantidad${cargar.tipo+cargar.id}`
    console.log(idimagen);
    console.log(idnombre);
    console.log(iddescripcion);
    console.log(idtipo);
    console.log(idprecio);
    console.log(idcantidad);
    const itemHTML= `
    <tr id="${cargar.id}">
    <td scope="row">${cargar.id}</td>
    <td class="text-left">${cargar.url_Imagen}</td>
    <td class="text-left">${cargar.nombre}</td>
    <td class="text-left">${cargar.descripcion}</td>
    <td class="text-left">${cargar.tipo}</td>
    <td class="text-left">${cargar.precio} pesos</td>
    <td class="text-left">${cargar.cantidad}</td>
    <td class="text-left"><button class="btn btn-success btn-sm" title="Editar" type="button" data-toggle="modal" data-target="#modal" data-whatever="@mdo" onclick="modal(${cargar.id})">Editar</button></td>
    <td class="text-left"><a href="#"><button class="btn btn-danger btn-sm" title="Eliminar" onclick="eliminar(${cargar.id})">Eliminar</button></a></td>
    </tr>
    `
    const itemsContainer = document.getElementById("lista");//define en que sección poner el producto
    itemsContainer.innerHTML += itemHTML;//añade el elemento HTML
}

function eliminar(id){
   fetch(`http://localhost:8081/api/productos/${id}`, {
             method: 'DELETE'
            })
        .then(console.log("Exito"))   
        
        
        var elem = document.getElementById(id);
        elem.parentNode.removeChild(elem);
}


function modal(id){
  console.log(id);
  fetch(`http://localhost:8081/api/productos/${id}`)
.then(data => {
return data.json();
})
.then(post => {
  $("#id").val(post.id);
  $("#imagen").val(post.url_Imagen);
  $("#nombre").val(post.nombre);
  $("#precio").val(post.precio);
  $("#cantidad").val(post.cantidad);
  $("#descripcion").val(post.descripcion);
});
}

function actualizar(){
  var id= document.getElementById('id').value;
  var nombre = document.getElementById('nombre').value;
    var precio = document.getElementById('precio').value;
    var cantidad = document.getElementById('cantidad').value;
    var tipo = document.getElementById('tipo').value;
    var descripcion = document.getElementById('descripcion').value;
    var img = document.getElementById('imagen').value;
    var producto=new Producto(nombre,precio,cantidad,tipo,descripcion,img);
    console.log(producto);
    fetch(`http://localhost:8081/api/productos/${id}`, {
      method: 'PUT', // or 'PUT'
      body: JSON.stringify(producto), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(console.log('Success:'));
}


class Producto {
  constructor(nombre,precio,cantidad,tipo,descripcion,img) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad= cantidad;
      this.tipo= tipo;
      this.descripcion= descripcion;
      this.img= img;
  }
}