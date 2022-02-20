    const nav =
    '<header>\n' +
    '<nav>\n' +
        '<ul class="nav-links">\n' +
            '<li><a href="Conocenos.html">Conócenos</a></li>\n' +
            '<li><a href="Desarrolladores.html">Desarrolladores</a></li>\n' +
            '<li><a href="https://www.animalgourmet.com/2018/02/26/damor-panaderia-guadalajara/">Noticias</a></li>\n' +
            '<li><a href="Tienda.html">Tienda</a></li>\n' +
            '<li><a href="https://www.faeeac.org">FAEE</a></li>\n' +
            '<li><a href="Contacto.html">Contacto</a></li>\n' +
            '<li><a button href="IniciarSesion.html" id="boton">Iniciar Sesión</a></li>\n' +
            '<li><a href=""><img src="assets/carrito de compras.png" alt="" id="carrito"></a></li>\n' +
        '</ul>\n' +
    '</nav>\n' +
'</header>';
    const itemsContainer = document.getElementById("navbar");
    itemsContainer.innerHTML += nav;