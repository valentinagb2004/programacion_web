function obtenerVariableDeURL(nombreVariable) {
    // Obtener la cadena de consulta de la URL actual
    const queryString = window.location.search;
  
    // Crear un objeto URLSearchParams para analizar la cadena de consulta
    const urlParams = new URLSearchParams(queryString);
  
    // Obtener el valor de la variable solicitada
    const valorVariable = urlParams.get(nombreVariable);
  
    // Devolver el valor de la variable (puede ser null si no se encuentra)
    return valorVariable;
  }

  function buscarNoticia(id){
    for(let i = 0; i < noticias.length; i++){
        if(id == noticias[i].id){
            return noticias[i];
        }
    }
}

  

  const id = obtenerVariableDeURL('id');
  console.log('Valor de la variable "id al":', id); // Salida: Valor de la variable "id": 123

  const nombre = obtenerVariableDeURL('nombre');
  console.log('Valor de la variable "nombre":', nombre); // Salida: Valor de la variable "nombre": Juan

  const apellido = obtenerVariableDeURL('apellido');
  console.log('Valor de la variable "apellido":', apellido); // Salida: Valor de la variable "nombre": Juan

  const noticia = buscarNoticia(id);
  titulo = noticia.titulo;

  //titulo = noticias[id].titulo;
  //imagen = noticias[id].imagen;

  //mostrar 
  console.log('Valor de la variable "id":', id); 
  console.log('Valor de la variable "titulo":', titulo); 
  console.log('Valor de la variable "imagen":', imagen); 

  //mostrar en el html
  document.getElementById("titulo").innerHTML = noticia.titulo;
  document.getElementById("imagen").src = noticia.imagen;
  document.getElementById("descripcion").innerHTML = noticia.desc_noticia;

  var fechaCalculada = tiempoHace(noticia.fecha);
  document.getElementById("contenidofecha").innerHTML = "publicado hace: "+fechaCalculada;

  document.getElementById("tituloNoticia").innerHTML = noticia.categoria + " NEW";

  var icono = noticia.icono;
  if(!icono){
    icono = "img/iconos/general.jpg";
  }
  document.getElementById("icono").src = icono;
