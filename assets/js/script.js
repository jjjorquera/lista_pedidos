//funciones

//1. Objeto de pedidos
class Pedidos {
  constructor(nombre, horario, sandwich) {
    this.nombre = nombre;
    this.horario = horario;
    this.sandwich = sandwich;
  }
}

//2.
function cargarTarea() {
  let agregarTarea = document.getElementById("cuerpo-tabla");

  agregarTarea.innerHTML = "";

  for (var i = 0; i < Pedidos.length; i++) {
    let nombre = Pedidos[i].nombre;
    let horario = Pedidos[i].horario;
    let sandwich = Pedidos[i].sandwich;

    // console.log(dato);
    agregarTarea.innerHTML =
      agregarTarea.innerHTML +
      ` <tr>
          <td>${nombre}</td>
          <td>${horario}</td>
          <td>${sandwich}</td>
          <td><button type="button" class="btn btn-danger" onclick="eliminarTarea(pedidos)">Eliminar</button></td>
          </tr>
      `; //
  }
}

//2. Función para eliminar la tarea
function eliminarTarea(indice) {
  //borra elemento por indice
  pedidos.splice(indice, 1);
  //actualiza la tabla
  cargarTarea(indice);
}

//3. Mostrar Formulario
function mostrar() {
  //identificar el nodo formulario
  var formulario = document.getElementById("formulario");
  //condicion para que aparezca
  if (formulario.style.display == "none") {
    formulario.style.display = "block";
  } else {
    formulario.style.display = "none";
  }
}

//función agregar
function agregar() {
  //recuperar el valor del formulario -- nueva tarea
  var nombreCLiente = document.getElementById("client").value;
  var horarioLlegada = document.getElementById("time").value;
  var tipoSandwich = document.getElementById("select").value;
  //   let table = document.getElementById("tabla-tareas");
  //agregar al arreglo
  let ingresos = new Pedidos(nombreCLiente, horarioLlegada, tipoSandwich);

  console.log(ingresos);

  //ocultar el formulario
  document.getElementById("formulario").style.display = "none";
  //borra el valor del input
  document.getElementById("nuevaTarea").value = "";

  if (!table === false) {
    table.style.display = "block";
  }

  cargarTarea();
}
