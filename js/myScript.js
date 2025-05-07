noticias = [];

function agregarComentario() {
    const textarea = document.querySelector("#input-box textarea");
    const listaComentarios = document.getElementById("lista-comentarios");

    if (textarea.value.trim() !== "") {
      const comentario = document.createElement("div");
      comentario.className = "comentario";
      comentario.textContent = textarea.value;
      listaComentarios.appendChild(comentario);
      textarea.value = "";
    }
}

function cargarNoticias(){

console.log("cargando noticias en memoria");

const noticia31 = {
    id: 31,
    titulo: "Preguntas de la consulta popular para revivir la reforma laboral de Petro no favorecen a los trabajadores: “Es egoísta”",
    fecha: "2025-05-06 20:00:00",
    desc_noticia: "Expertos analizaron los 12 cuestionamientos que presentaron los ministros Armando Benedetti y Antonio Sanguino y coincidieron en que están mal diseñados, sobre todo, porque deja a un lado a los empleados informales",
    imagen: "img/Petro.jpg",
    categoria: "Farandula",
    active: true,
    icono: "img/iconos/farandula.png"
};

const noticia32 = {
    id: 32,
    titulo: "Astrología",
    fecha: "2025-04-20",
    desc_noticia: "Estos son los signos de la Astrología China con mayor fortuna en mayo 2025",
    imagen: "img/astrologia.jpg",
    categoria: "Astrología",
    active: true,
    icono: "img/iconos/astrologiaa.jpg"
};

const noticia33 = {
    id: 33,
    titulo: "Inteligencia Artificial predice enfermedades con 95% de precisión",
    fecha: "2025-04-18",
    desc_noticia: "Un nuevo algoritmo desarrollado por investigadores europeos puede detectar enfermedades cardíacas antes de que aparezcan los síntomas.",
    imagen: "./img/ia_salud.jpg",
    categoria: "Tecnología",
    active: true,
    icono: "img/iconos/tecnologia.jpg"
};

const noticia34 = {
    id: 34,
    titulo: "Colombia clasifica a la final de la Copa América 2025",
    fecha: "2025-04-21",
    desc_noticia: "La selección colombiana venció a Argentina 2-1 y disputará la final en el Estadio Maracaná.",
    imagen: "./img/seleccionColom.jpg",
    categoria: "Deportes",
    active: true,
    icono: "img/iconos/deporte.jpg"
};

const noticia35 = {
    id: 35,
    titulo: "Nueva especie de orquídea descubierta en el Amazonas",
    fecha: "2025-04-19",
    desc_noticia: "Botánicos han identificado una flor única en el sur del Amazonas que emite un brillo nocturno para atraer insectos polinizadores.",
    imagen: "./img/orquidea.jpg",
    categoria: "Farandula",
    active: true,
    icono: "img/iconos/farandula.png"
};

const noticia36 = {
    id: 36,
    titulo: "Netflix anuncia serie sobre Simón Bolívar con producción internacional",
    fecha: "2025-04-17",
    desc_noticia: "La plataforma confirmó el inicio del rodaje de una serie épica sobre el Libertador, con locaciones en Colombia y España.",
    imagen: "./img/netflix-bolivar.jpg",
    categoria: "Farandula",
    active: true,
    icono: "img/iconos/farandula.png"

};

const noticia37 = {
    id: 37,
    titulo: "Aplicación móvil ayuda a ahorrar hasta un 30% en mercado mensual",
    fecha: "2025-04-22",
    desc_noticia: "La app 'AhorraYa' compara precios en supermercados cercanos y sugiere rutas de compra optimizadas.",
    imagen: "./img/appAhorro.jpg",
    categoria: "Farandula",
    active: true,
    icono: "img/iconos/farandula.png"
};

const noticia38 = {
    id: 38,
    titulo: "Aumentan los niveles del mar en el Caribe: alerta para las comunidades costeras",
    fecha: "2025-04-21",
    desc_noticia: "Un nuevo informe climático advierte que los niveles del mar aumentan más rápido de lo previsto.",
    imagen: "./img/nivelMar.jpg",
    categoria: "Farandula",
    active: true,
    icono: "img/iconos/farandula.png"

};


const noticia39 = {
    id: 39,
    titulo: "WhatsApp incluirá traducción automática en tiempo real",
    fecha: "2025-04-20",
    desc_noticia: "La aplicación de mensajería más usada del mundo integrará un sistema de traducción en sus chats.",
    imagen: "./img/traductorWhats.jpg",
    categoria: "Tecnología",
    active: true,
    icono: "img/iconos/tecnologia.jpg"
};

const noticia40 = {
    id: 40,
    titulo: "Descubren ciudad submarina frente a las costas de Grecia",
    fecha: "2025-04-19",
    desc_noticia: "Arqueólogos marinos han hallado restos de una ciudad que dataría del año 2000 a.C.",
    imagen: "./img/ciudadSub.jpg",
    categoria: "Farandula",
    active: true,
    icono: "img/iconos/farandula.png"
};

const noticia41 = {
    id: 41,
    titulo: "Concierto gratuito de Karol G en Medellín reúne a más de 200 mil personas",
    fecha: "2025-04-22",
    desc_noticia: "La artista antioqueña sorprendió con un evento gratuito para sus fans como cierre de gira mundial.",
    imagen: "./img/conciertoKarolG.jpg",
    categoria: "Farandula",
    active: true,
    icono: "img/iconos/farandula.png"
};

const noticia42 = {
    id: 42,
    titulo: "Inicia vacunación obligatoria contra nueva cepa de gripe en Colombia",
    fecha: "2025-04-18",
    desc_noticia: "El Ministerio de Salud ordena jornada nacional de vacunación por incremento de contagios.",
    imagen: "./img/nuevaVacuna.jpg",
    categoria: "Farandula",
    active: true,
    icono: "img/iconos/farandula.png"
};

const noticia43 = {
    id: 43,
    titulo: "Lanzan cohete colombiano con satélite de observación terrestre",
    fecha: "2025-04-17",
    desc_noticia: "El satélite permitirá monitorear cultivos y prevenir desastres naturales en el país.",
    imagen: "./img/sateliteColombiano.jpg",
    categoria: "Tecnologia",
    active: true,
    icono: "img/iconos/tecnologia.jpg"

};

const noticia44 = {
    id: 44,
    titulo: "Nuevo récord Guinness: el tamal más grande del mundo se preparó en Tolima",
    fecha: "2025-04-20",
    desc_noticia: "Más de 300 personas participaron en la elaboración de un tamal de 800 kilos.",
    imagen: "./img/tamalGigante.jpg",
    categoria: "Farandula",
    active: true,
    icono: "img/iconos/farandula.png"

};


const noticia45 = {
    id: 45,
    titulo: "Reforma pensional entra en su fase final de aprobación",
    fecha: "2025-04-21",
    desc_noticia: "El Congreso debatirá la próxima semana los últimos artículos del proyecto.",
    imagen: "./img/reformaPensional.jpg",
    categoria: "Farandula",
    active: true,
    icono: "img/iconos/farandula.png"
};

const noticia46 = {
    id: 46,
    titulo: "Descubren vacuna experimental contra el Alzheimer en ratones",
    fecha: "2025-04-16",
    desc_noticia: "Los resultados preliminares son prometedores y abren paso a pruebas en humanos.",
    imagen: "./img/vacunaAlzheimer.jpg",
    categoria: "Teconologia",
    active: true,
    icono: "img/iconos/tecnologia.jpg"
};

const noticia47 = {
    id: 47,
    titulo: "Se dispara el precio del café colombiano en el mercado internacional",
    fecha: "2025-04-19",
    desc_noticia: "La demanda por café premium colombiano impulsa su valor a máximos históricos.",
    imagen: "./img/cafeColombia.jpg",
    categoria: "Farandula",
    active: true,
    icono: "img/iconos/farandula.png"
};

const noticia48 = {
    id: 48,
    titulo: "Primer hotel bajo tierra se inaugura en Dubái",
    fecha: "2025-04-22",
    desc_noticia: "El innovador diseño incluye suites con ventanas al subsuelo natural.",
    imagen: "./img/hotelSubterraneo.jpg",
    categoria: "Farandula",
    active: true,
    icono: "img/iconos/farandula.png"
};

const noticia49 = {
    id: 49,
    titulo: "Nueva ley de protección animal endurece penas por maltrato",
    fecha: "2025-04-20",
    desc_noticia: "Las condenas pueden alcanzar hasta 8 años de prisión por casos graves.",
    imagen: "./img/leyAnimal.jpg",
    categoria: "Sociedad",
    active: true
};

const noticia50 = {
    id: 50,
    titulo: "Lanzan videojuego colombiano que triunfa en Asia",
    fecha: "2025-04-21",
    desc_noticia: "El título 'Leyendas de los Andes' mezcla mitología indígena con acción RPG.",
    imagen: "./img/videojuegosColombia.jpg",
    categoria: "Videojuegos",
    active: true
};

const noticia51 = {
    id: 51,
    titulo: "China lanza la misión Shenzhou-20 hacia su estación espacial Tiangong",
    fecha: "2025-04-24",
    desc_noticia: "China lanzó con éxito la misión tripulada Shenzhou-20 desde el desierto del Gobi. Los tres astronautas realizarán 59 experimentos científicos en microgravedad y biociencia espacial durante seis meses, marcando un paso clave hacia la futura misión lunar china.",
    imagen: "./img/shenzhou20.jpg",
    categoria: "Espacio",
    active: true
};


const noticia52 = {
    id: 52,
    titulo: "Cristiano Ronaldo anuncia su retiro del fútbol profesional",
    fecha: "2025-04-22",
    desc_noticia: "El astro portugués se despide tras una carrera de más de 20 años llena de títulos.",
    imagen: "./img/ronaldoRetiro.jpg",
    categoria: "Deportes",
    active: true
};


const noticia53 = {
    id: 53,
    titulo: "Bogotá se prepara para la Feria Internacional del Libro 2025",
    fecha: "2025-04-19",
    desc_noticia: "Este año, Italia será el país invitado y se espera la asistencia de más de 600 mil personas.",
    imagen: "./img/feriaLibro.jpg",
    categoria: "Cultura",
    active: true
};

const noticia54 = {
    id: 54,
    titulo: "TikTok limita tiempo de uso diario para menores de edad",
    fecha: "2025-04-20",
    desc_noticia: "La plataforma anunció nuevas restricciones para proteger la salud mental juvenil.",
    imagen: "./img/tiktokLimite.jpg",
    categoria: "Tecnología",
    active: true
};

const noticia55 = {
    id: 55,
    titulo: "NASA confirma existencia de agua salada bajo la superficie de Marte",
    fecha: "2025-04-22",
    desc_noticia: "Este hallazgo renueva las esperanzas de encontrar vida en el planeta rojo.",
    imagen: "./img/aguaMarte.jpg",
    categoria: "Ciencia",
    active: true
};

const noticia56 = {
    id: 56,
    titulo: "Festival gastronómico en Cartagena reúne sabores de América Latina",
    fecha: "2025-04-18",
    desc_noticia: "Chefs de 12 países participarán en esta edición con platos tradicionales y fusiones modernas.",
    imagen: "./img/festivalGastronomico.jpg",
    categoria: "Gastronomía",
    active: true
};

const noticia57 = {
    id: 57,
    titulo: "Aumentan los casos de ansiedad en jóvenes por presión académica",
    fecha: "2025-04-17",
    desc_noticia: "Estudios revelan que 6 de cada 10 estudiantes universitarios presentan signos de estrés severo.",
    imagen: "./img/ansiedadEstudiantes.jpg",
    categoria: "Salud mental",
    active: true
};

const noticia58 = {
    id: 58,
    titulo: "España aprueba proyecto de ley para reducir la jornada laboral a 37,5 horas semanales",
    fecha: "2025-04-24",
    desc_noticia: "El Consejo de Ministros de España ha aprobado el proyecto de ley que reduce la jornada laboral a 37,5 horas semanales sin reducción salarial. La medida busca mejorar la calidad de vida de los trabajadores y será enviada al Parlamento para su debate.",
    imagen: "./img/reduccionJornada.jpg",
    categoria: "Trabajo",
    active: true
};

const noticia59 = {
    id: 59,
    titulo: "Eclipse solar parcial del 29 de marzo de 2025 será visible en América del Sur",
    fecha: "2025-03-29",
    desc_noticia: "El 29 de marzo de 2025, un eclipse solar parcial será visible en varias regiones de América del Sur, incluyendo partes del norte de Colombia y Venezuela. Se recomienda utilizar protección ocular adecuada para observar el fenómeno.",
    imagen: "./img/eclipse.jpg",
    categoria: "Astronomia",
    active: true
};

    const noticia60 = {
    id: 60,
    titulo: "Green Riders Caribe 2025: recorrido sostenible en bicicletas eléctricas por La Guajira",
    fecha: "2025-04-24",
    desc_noticia: "La segunda edición del evento Green Riders Caribe 2025 se llevó a cabo en La Guajira, Colombia, con un recorrido de 600 km en bicicletas eléctricas para promover la movilidad sostenible y apoyar el desarrollo comunitario.",
    imagen: "./img/greenRiders.jpg",
    categoria: "Movilidad",
    active: true
};

/*agragar noticias al arreglo*/
/*agragar noticias al arreglo*/
noticias.push(noticia31);
noticias.push(noticia32);
noticias.push(noticia33);
noticias.push(noticia34);
noticias.push(noticia35);
noticias.push(noticia36);
noticias.push(noticia37);
noticias.push(noticia38);
noticias.push(noticia39);
noticias.push(noticia40);
noticias.push(noticia41);
noticias.push(noticia42);
noticias.push(noticia43);
noticias.push(noticia44);
noticias.push(noticia45);
noticias.push(noticia46);
noticias.push(noticia47);
noticias.push(noticia48);
noticias.push(noticia49);
noticias.push(noticia50);
noticias.push(noticia51);
noticias.push(noticia52);
noticias.push(noticia53);
noticias.push(noticia54);
noticias.push(noticia55);
noticias.push(noticia56);
noticias.push(noticia57);
noticias.push(noticia58);
noticias.push(noticia59);
noticias.push(noticia60);

console.log("se cargaron " + noticias.length + "noticias, han sido cargadas en memoria");
}

function mostrarNoticias(){
    noticiaHTML = "";
    noticias.forEach(element => {
        noticiaHTML = formatearNoticia(element);
        document.getElementById("capaNoticias").innerHTML += noticiaHTML;
    });
}

function formatearNoticia(noticiajson){
    id = noticiajson.id;
    direccion = "noticias.html?id=" + id;

    formatHTML = `
                <div class='row'>
                    <p> ${noticiajson.categoria} </p>
                    <h3> ${noticiajson.titulo} </h3>
                    <p> ${noticiajson.fecha} </p>
                    <img id ='imgnoticias' src = '${noticiajson.imagen}' />
                    <a href ="${direccion}"> ver mas </a>                </div>`;

    return formatHTML;
}

cargarNoticias();
mostrarNoticias();