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
  let usuario = document.getElementById('usuario').value;
  let password = document.getElementById('password').value;

  if (usuario == localStorage.getItem('usuario') && password == localStorage.getItem('password')){
    console.log("SAMEEE")
    cambiarSeccion(1);
  }
  
  
}