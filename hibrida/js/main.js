var seccion_actual;

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