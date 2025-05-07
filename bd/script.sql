Drop table noticias;

CREATE TABLE `noticias` (
  `id_noticia` int(11) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `descripcion` varchar(2000) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `activo` varchar(50) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
