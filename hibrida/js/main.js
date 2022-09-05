var seccion_actual;

localStorage.setItem('usuario', 'admin')
localStorage.setItem('password', 'something123')

function ocultar()
{
  let secciones = document.getElementsByClassName("seccion"); 
  for(var i=0;i<secciones.length;i++){
    secciones[i].classList.add("ocultar");
    secciones[i].classList.remove("animate__bounceInRight");
  }

}

function cambiarSeccion(id)
{
  let seccion = document.getElementById("seccion_"+id);
  ocultar();
  seccion.classList.remove("ocultar");
  seccion.classList.add("animate__bounceInRight");
}

function login(){
  let usuario = document.getElementById('usuario');
  let password = document.getElementById('password');

  cambiarSeccion(1);
  if (usuario.value == localStorage.getItem('usuario') && password.value == localStorage.getItem('password')){
    console.log("Successful login")
    usuario.value = "";
    password.value = "";
  }
  else{
    console.log("Error on login - Wrong username/password")
    usuario.style.background = "#ff000011"
    password.style.background = "#ff000011"
  } 
}

function reservar(){
  console.log("Launching reservar function...");
  let seleccion = document.querySelector('input[name="reservar"]:checked');
  console.log("You selected " + seleccion.value);
  localStorage.setItem('reservas', seleccion.value);
  let listareservas = document.getElementById('listareservas');
  let newreserva = document.createElement('p')
  newreserva.value = localStorage.getItem('reservas')
  listareservas.appendChild(newreserva)
  cambiarSeccion(6);
}
