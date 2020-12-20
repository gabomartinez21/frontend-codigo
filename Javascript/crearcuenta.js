// Configuracion de la barra de navegacion

let barradenavegacioncrearcuenta = new BarradeNavegacion(
  "crearcuenta",
  "paginadelaempresa.html",
  "#",
  "Nuevo",
  "#",
  "Ofertas",
  "paginadelaempresa.html",
  "Nosotoros",
  "iniciodesesion.html",
  "Iniciar Sesion"
);
barradenavegacioncrearcuenta.agregarloalbody();
barradenavegacioncrearcuenta.adaptaropcionesatamanospequenos();
barradenavegacioncrearcuenta.adaptarinputdebusqueda();
barradenavegacioncrearcuenta.buscarproducto();

// -----------------------------------------------------------------------------------------

console.log(window.location.pathname)

fetch("http://localhost:5000/usuarios/paolo").then((respuesta) => respuesta.json().then((respuesta) => console.log(respuesta)))


const CrearCuenta = () => {
  let formulariodecrearcuenta = document.getElementById(
    "formulariodecrearcuenta"
  );

  let nuevousuario = {
    nombre: "",
    apellido: "",
    fechadenacimiento: "",
    correo: "",
    contrasena: "",
    telefono: "",
    direccion: "",
    descripcion: "",
    sexo: "",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSymjxHoVB2hlH41ioYDjkzOd7oVPhJu-uIeQ&usqp=CAU",
  };

  let aceptadordeformulario = {
    nombreaceptado: "",
    apellidoaceptado: "",
    fechadenacimientoaceptada: "",
    correoaceptado: "",
    contrasenaaceptada: "",
    telefonoaceptado: "",
    direccionaceptada: "",
    descripcionaceptada: "",
    sexoaceptado: "",
  };

  const inspeccionadordeinputnombreusuario = () => {
    let inputnombreusuario = document.getElementById("inputnombre");
    let nombreusuario = inputnombreusuario.value.trim();

    if (parseInt(nombreusuario) <= 0 || parseInt(nombreusuario) >= 0) {
      inputnombreusuario.style.borderColor = "red";
      inputnombreusuario.placeholder = "ingrese un nombre valido";
    } else if (nombreusuario === "") {
      inputnombreusuario.style.borderColor = "red";
      inputnombreusuario.value = "";
      inputnombreusuario.placeholder = "ingrese un nombre valido";
    } else if (nombreusuario.length <= 2) {
      inputnombreusuario.style.borderColor = "red";
      inputnombreusuario.value = "";
      inputnombreusuario.placeholder = "ingrese un nombre valido";
    } else {
      aceptadordeformulario.nombreaceptado = true;
      nuevousuario.nombre = nombreusuario;
      console.log(nombreusuario);
    }
  };

  const inspeccionadordeinputapellidousuario = () => {
    let inputapellidousuario = document.getElementById("inputapellido");
    let apellidousuario = inputapellidousuario.value.trim();

    if (parseInt(apellidousuario) <= 0 || parseInt(apellidousuario) >= 0) {
      inputapellidousuario.style.borderColor = "red";
      inputapellidousuario.placeholder = "ingrese un apellido valido";
    } else if (apellidousuario === "") {
      inputapellidousuario.style.borderColor = "red";
      inputapellidousuario.placeholder = "ingrese un apellido valido";
    } else if (apellidousuario.length <= 2) {
      inputapellidousuario.style.borderColor = "red";
      inputapellidousuario.placeholder = "ingrese un apellido valido";
    } else {
      aceptadordeformulario.apellidoaceptado = true;
      nuevousuario.apellido = apellidousuario;
      console.log(apellidousuario);
    }
  };

  const inspeccionadordeinputfechadenacimientousuario = () => {
    let inputfechadenacimientousuario = document.getElementById(
      "inputfechadenacimiento"
    );
    let fechadenacimientousuario = parseInt(
      inputfechadenacimientousuario.value.trim()
    );

    if (fechadenacimientousuario <= 0 || fechadenacimientousuario >= 100) {
      inputfechadenacimientousuario.style.borderColor = "red";
      inputfechadenacimientousuario.placeholder =
        "ingrese una fecha de nacimiento valida";
    } else if (fechadenacimientousuario === "") {
      inputfechadenacimientousuario.style.borderColor = "red";
      inputfechadenacimientousuario.placeholder =
        "ingrese una fecha de nacimiento valida";
    } else if (isNaN(fechadenacimientousuario)) {
      inputfechadenacimientousuario.style.borderColor = "red";
      inputfechadenacimientousuario.placeholder =
        "ingrese una fecha de nacimiento valida";
    } else if (fechadenacimientousuario.length >= 2) {
      inputfechadenacimientousuario.style.borderColor = "red";
      inputfechadenacimientousuario.placeholder =
        "ingrese una fecha de nacimiento valida";
    } else {
      aceptadordeformulario.fechadenacimientoaceptada = true;
      nuevousuario.fechadenacimiento = fechadenacimientousuario;
      console.log(fechadenacimientousuario);
    }
  };

  const inspeccionadordeinputcorreousuario = () => {
    let inputcorreousuario = document.getElementById("inputcorreo");
    let correousuario = inputcorreousuario.value.trim();

    if (parseInt(correousuario) <= 0 || parseInt(correousuario) >= 0) {
      inputcorreousuario.style.borderColor = "red";
      inputcorreousuario.placeholder = "ingrese un correo valido";
    } else if (correousuario === "") {
      inputcorreousuario.style.borderColor = "red";
      inputcorreousuario.placeholder = "ingrese un correo valido";
    } else if (correousuario.length <= 12) {
      inputcorreousuario.style.borderColor = "red";
      inputcorreousuario.placeholder = "ingrese un correo valido";
    } else if (
      correousuario.endsWith("@gmail.com") ||
      correousuario.endsWith("@hotmail.com")
    ) {
      aceptadordeformulario.correoaceptado = true;
      nuevousuario.correo = correousuario;
      console.log(correousuario);
    } else {
      inputcorreousuario.style.borderColor = "red";
      inputcorreousuario.placeholder = "ingrese un correo valido";
    }
  };

  const inspeccionadordeinputcontrasenausuario = () => {
    let inputcontrasenausuario = document.getElementById("inputcontrasena");
    let contrasenausuario = inputcontrasenausuario.value.trim();

    if (parseInt(contrasenausuario) >= 0 || parseInt(contrasenausuario) <= 0) {
      inputcontrasenausuario.style.borderColor = "red";
      inputcontrasenausuario.placeholder = "ingrese una contrasena valido";
    } else if (contrasenausuario === "") {
      inputcontrasenausuario.style.borderColor = "red";
      inputcontrasenausuario.placeholder = "ingrese una contrasena valido";
    } else if (
      contrasenausuario.length <= 8 ||
      contrasenausuario.length >= 20
    ) {
      inputcontrasenausuario.style.borderColor = "red";
      inputcontrasenausuario.placeholder = "ingrese una contrasena valido";
    } else {
      aceptadordeformulario.contrasenaaceptada = true;
      nuevousuario.contrasena = contrasenausuario;
      console.log(contrasenausuario);
    }
  };

  const inspeccionadordeinputtelefonousuario = () => {
    let inputtelefonousuario = document.getElementById("inputtelefono");
    let telefonousuario = parseInt(inputtelefonousuario.value.trim());

    if (telefonousuario === "") {
      inputtelefonousuario.style.borderColor = "red";
      inputtelefonousuario.placeholder = "ingrese un telefono valido";
    } else if (telefonousuario.length > 9) {
      inputtelefonousuario.style.borderColor = "red";
      inputtelefonousuario.placeholder = "ingrese un telefono valido";
    } else if (isNaN(telefonousuario)) {
      inputtelefonousuario.style.borderColor = "red";
      inputtelefonousuario.placeholder = "ingrese un telefono valido";
    } else if (typeof telefonousuario === "string") {
      inputtelefonousuario.style.borderColor = "red";
      inputtelefonousuario.placeholder = "ingrese un telefono valido";
    } else {
      aceptadordeformulario.telefonoaceptado = true;
      nuevousuario.telefono = telefonousuario;
      console.log(telefonousuario);
    }
  };

  const inspeccionadordeinputdescripcionusuario = () => {
    let inputdescripcionusuario = document.getElementById("inputdescripcion");
    let descripcionusuario = inputdescripcionusuario.value.trim();

    if (
      parseInt(descripcionusuario) >= 0 ||
      parseInt(descripcionusuario) <= 0
    ) {
      inputdescripcionusuario.style.borderColor = "red";
      inputdescripcionusuario.placeholder = "ingrese minimo 50 letras";
    } else if (descripcionusuario === "") {
      inputdescripcionusuario.style.borderColor = "red";
      inputdescripcionusuario.placeholder = "ingrese minimo 50 letras";
    } else if (
      descripcionusuario.length < 50 ||
      descripcionusuario.length > 100
    ) {
      inputdescripcionusuario.style.borderColor = "red";
      inputdescripcionusuario.placeholder = "ingrese minimo 50 letras";
    } else {
      aceptadordeformulario.descripcionaceptada = true;
      nuevousuario.descripcion = descripcionusuario;
      console.log(descripcionusuario);
    }
  };

  const inspeccionadordeinputdireccionusuario = () => {
    let inputdireccionusuario = document.getElementById("inputapellido");
    let direccionusuario = inputdireccionusuario.value.trim();

    if (parseInt(direccionusuario) <= 0 || parseInt(direccionusuario) >= 0) {
      inputdireccionusuario.style.borderColor = "red";
      inputdireccionusuario.placeholder = "ingrese una direccion valida";
    } else if (direccionusuario === "") {
      inputdireccionusuario.style.borderColor = "red";
      inputdireccionusuario.placeholder = "ingrese una direccion valida";
    } else if (direccionusuario.length <= 2) {
      inputdireccionusuario.style.borderColor = "red";
      inputdireccionusuario.placeholder = "ingrese una direccion valida";
    } else {
      aceptadordeformulario.direccionaceptada = true;
      nuevousuario.direccion = direccionusuario;
      console.log(direccionusuario);
    }
  };

  const inspeccionadordeinputsexousuario = () => {
    let sexohombre = document.getElementById("sexohombre");
    let sexomujer = document.getElementById("sexomujer");
    let inputsexohombreusuario = document.getElementById("inputsexohombre");
    let inputsexomujerusuario = document.getElementById("inputsexomujer");
    let sexousuario = "";

    if (inputsexohombreusuario.checked) {
      aceptadordeformulario.sexoaceptado = true;
      sexousuario = inputsexohombreusuario.value;
      nuevousuario.sexo = sexousuario;
      console.log(sexousuario);
    } else if (inputsexomujerusuario.checked) {
      aceptadordeformulario.sexoaceptado = true;
      sexousuario = inputsexomujerusuario.value;
      nuevousuario.sexo = sexousuario;
      console.log(sexousuario);
    } else {
      sexohombre.style.color = "red";
      sexomujer.style.color = "red";
    }
  };

  const agregarusuarioalabasededatos = () => {
    fetch("http://localhost:5000/crearcuenta", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevousuario),
    })
      .then((respuesta) =>
        respuesta.json().then((respuesta2) => console.log(respuesta2))
      )
      .catch((error) => {
        console.log(error);
      });
  };

  let botondecrearcuenta = document.getElementById("botondecrearcuenta");

  botondecrearcuenta.addEventListener("click", (e) => {
    inspeccionadordeinputnombreusuario();
    inspeccionadordeinputapellidousuario();
    inspeccionadordeinputfechadenacimientousuario();
    inspeccionadordeinputcorreousuario();
    inspeccionadordeinputcontrasenausuario();
    inspeccionadordeinputtelefonousuario();
    inspeccionadordeinputdireccionusuario();
    inspeccionadordeinputdescripcionusuario();
    inspeccionadordeinputsexousuario();
    if (
      aceptadordeformulario.nombreaceptado === true &&
      aceptadordeformulario.apellidoaceptado === true &&
      aceptadordeformulario.edadaceptada === true &&
      aceptadordeformulario.correoaceptado === true &&
      aceptadordeformulario.contrasenaaceptada === true &&
      aceptadordeformulario.telefonoaceptado === true &&
      aceptadordeformulario.direccionaceptada === true &&
      aceptadordeformulario.descripcionaceptada === true &&
      aceptadordeformulario.sexoaceptado === true
    ) {
      agregarusuarioalabasededatos();
    } else {
      console.log("complete el formulario con datos validos");
    }
    e.preventDefault();
  });

  let botondeiniciarsesion = document.getElementById("botondeiniciarsesion");
  botondeiniciarsesion.addEventListener("click", () => {
    window.location.href = "iniciodesesion.html";
  });
};

// Configuracion de la piedepagina

let piedepaginacrearcuenta = new PiedePagina(
  "crearcuenta",
  "paginadelaempresa.html",
  "#",
  "#",
  "paginadereclamos.html"
);
piedepaginacrearcuenta.agregaralbody();

// -----------------------------------------------------------------------------------------
