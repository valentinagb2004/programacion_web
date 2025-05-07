use web_noticias;
Drop table noticias;

CREATE TABLE `noticias` (
  `id_noticia` int(11) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `descripcion` varchar(2000) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `activo` varchar(1) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

insert into noticias values (
    1, "Preguntas de la consulta popular para revivir la reforma laboral de Petro no favorecen a los trabajadores: Es egoísta",
    "img/Petro.jpg",
    "Expertos analizaron los 12 cuestionamientos que presentaron los ministros Armando Benedetti y Antonio Sanguino y coincidieron en que están mal diseñados, sobre todo, porque deja a un lado a los empleados informales",
    "Farandula", 'Y',
    "2025-05-06 20:00:00"
);







