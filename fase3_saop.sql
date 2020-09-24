USE saop_fase2;

SELECT * FROM curso;
SELECT * FROM carrera;
SELECT * FROM curso_pensum;
SELECT * FROM pensum;
SELECT * FROM usuario;
SELECT * FROM usuario_curso;

ALTER TABLE curso ADD prerequisitos VARCHAR(50);
ALTER TABLE curso ADD detalle VARCHAR(250);

ALTER TABLE usuario_curso ADD str_comentario VARCHAR(250);

DESCRIBE curso;
DESCRIBE carrera;
DESCRIBE curso_pensum;
DESCRIBE pensum;
DESCRIBE usuario;
DESCRIBE usuario_curso;

/*
ALTER TABLE curso DROP COLUMN detalle;
DELETE FROM carrera WHERE codigo_carrera = 3;
DELETE FROM curso WHERE codigo_curso = 6;
TRUNCATE TABLE curso;
*/

INSERT INTO carrera VALUES	(1,'Ingenieria en Ciencias y Sistemas'),
							(2,'Ingenieria Industrial'),
                            (3,'Ingenieria de Mecanica Electrica');
                            
INSERT INTO curso VALUES	(017,'Social Humanistica 1', 4, 'Ninguno', 'Curso de estudios sociales de guatemala'),
							(101,'Matematica basica 1', 7, 'Ninguno', 'Curso de estudios de algebra, trigonometria, aritmetica y geometria basica'),
                            (003,'Orientacion y Liderazgo', 1, 'Ninguno', 'Curso que fomenta las aptitudes de orientacion y liderazgo'),
                            (069,'Tecnica Complementaria', 3, 'Ninguno', 'Curso que instruye en las tecnicas ilustratibas profesionales'),
                            (039,'Deportes 1', 1, 'Ninguno', 'Curso que busca instruir e involucrar al estudiante en actividades deportivas'),
                            (348,'Quimica General 1', 3, 'Ninguno', 'Curso que busca introducir en las ciencias quimicas profesionales'),
                            (0006,'Idioma Tecnico 1', 2, 'Ninguno', 'Educacion al estudiante en el idioma ingles tecnico profesional a nivel basico o general');
                            
INSERT INTO curso VALUES	(019,'Social Humanistica 2', 4, '017', 'Curso de estudios sociales de guatemala y centro america'),
							(103,'Matematica basica 2', 7, '101', 'Curso de estudios de algebra avanzada, precalculo y calculo'),
                            (005,'Tecnicas de estudio e investigacion', 3, 'Ninguno', 'Curso introductivo a la aplicacion de tecnicas estadisticas'),
                            (147,'Fisica basica', 5, '101', 'Curso estudios basicos de fisica fundamental'),
                            (040,'Deportes 2', 1, '039', 'Curso que busca instruir aun mas al estudiante en actividades deportivas'),
                            (0008,'Idioma Tecnico 2', 2, '006', 'Educacion al estudiante en el idioma ingles tecnico profesional a nivel intermedio o aplicado');
UPDATE curso SET prerequisitos = '6' WHERE codigo_curso = 8;      
UPDATE curso SET prerequisitos = '17' WHERE codigo_curso = 19;  
UPDATE curso SET prerequisitos = '39' WHERE codigo_curso = 40;                        

INSERT INTO curso VALUES	(795,'Logica de sistemas', 2, '103', 'Curso de orientacion de logica aplicada a sistemas'),
							(960,'Matematica de computo', 5, '103', 'Curso de estudios de matematicas aplicadas al computo'),						
                            (770,'Introduccion a la programacion y computacion 1', 4, '103', 'Curso introductivo a la programacion'),
                            (107,'Matematica intermedia 1', 10, '103', 'Curso de estudios de calculo y matematicas aplicadas'),
                            (150,'Fisica 1', 6, '103, 147', 'Curso estudios basicos de fisica aplicada'),
                            (9,'Idioma Tecnico 3', 2, '8', 'Educacion al estudiante en el idioma ingles tecnico profesional a nivel intermedio o aplicado'),
                            (2025,'Practica Inicial', 0, '103, 770', 'Curso de practica de aplicadion de conosimientos del area de sistemas');

INSERT INTO curso VALUES	(732,'Estadistica 1', 5, '107, 5', 'Curso introductivo a la aplicacion de tecnicas estadisticas avanzadas'),
							(796,'Lenguajes formales y de programacion', 3, '770, 795, 960', 'Curso introductivo a la aplicacion de lenguajes formales de programacion'),
							(962,'Matematica de computo 2', 5, '960, 770, 795', 'Curso de estudios de matematicas aplicadas al computo avanzado'),
                            (771,'Introduccion a la programacion y computacion 2', 5, '107, 770, 795, 960', 'Curso introductivo a la programacion y planificacion avanzada'),
                            (112,'Matematica intermedia 2', 5, '107', 'Curso de estudios de calculo de una sola variable'),
                            (114,'Matematica intermedia 3', 5, '107', 'Curso de estudios de calculo con metodos numericos'),
                            (152,'Fisica 2', 6, '107, 150', 'Curso estudios avanzados de fisica aplicada'),
                            (11,'Idioma Tecnico 4', 2, '9', 'Educacion al estudiante en el idioma ingles tecnico profesional a nivel avanzado'),
                            (18,'Filosofia de la ciencia', 3, '19', 'Orientacion filosofica de la ciencia');

INSERT INTO curso VALUES	(736,'Analisis Probabilistico', 4, '732', 'Curso introductivo a la aplicacion de tecnicas de analisis de probabilidad avanzadas'),
							(777,'Organizacion de Lenguajes Y Computacion 1', 4, '771, 796, 962', 'Curso introductivo a la aplicacion lenguajes y compiladores'),
							(964,'Organizacion Computacional ', 3, '152, 771, 962', 'Curso de aplicacion de ingenieria electrica y matematica de computo'),
                            (772,'Estructura de Datos', 5, '771, 796, 962', 'Curso de introduccion a las estructuras de datos y sus aplicaciones'),
                            (116,'Matematica Aplicada 3', 5, '112, 114', 'Curso de estudios de calculo con metodos numericos avanzados'),
                            (118,'Matematica Aplicada 1', 6, '112, 114', 'Curso estudios avanzados aplicacion de calculo de varias variables');

INSERT INTO curso VALUES	(722,'Teoria de Sistemas 1', 5, '732, 772, 116, 118', 'Curso de analisis avanzado de teoria en los sistemas'),
							(601,'Investigacion De Operaciones 1', 5, '771, 732', 'Curso introductivo a la investigacion aplicada en operaciones'),
							(14,'Economia ', 4, '732', 'Curso de economia nacional'),
                            (781,'Organizacion de Lenguajes Y Compiladores 2', 5, '777, 772', 'Curso avanzado de compiladores'),
                            (778,'Arquitectura de Computadores Y Ensambladores 1', 5, '796, 964', 'Curso de aplicacion de ingenieria electrica y lenguaje ensamblador'),
                            (773,'Manejo e Implementacion De Archivos', 4, '772, 796', 'Curso estudios avanzados de sistemas de archivos');

INSERT INTO curso VALUES	(724,'Teoria de Sistemas 2', 5, '722, 601, 736', 'Curso de analisis avanzado de teoria y planificacion de los sistemas'),
							(603,'Investigacion De Operaciones 2', 5, '601', 'Curso avanzado de investigacion aplicada en operaciones'),
							(281,'Sistemas Operativos 1', 5, '781, 778', 'Curso introductivo a los sistemas operativos'),
                            (779,'Arquitectura de Computadores Y Ensambladores 2', 4, '778', 'Curso avanzado de aplicacion de ingenieria electrica'),
                            (970,'Redes de Computadoras 1', 4, '773, 778', 'Curso introductivo a las redes de sistemas computacionales'),
                            (774,'Sistemas De Bases de Datos 1', 5, '773', 'Curso introductivo al manejo de bases de datos'),
                            (2036,'Practica Intermedia', 0, '778, 777, 773, 2025', 'Curso de aplicacion de conocimiento de ingenieria en sistemas');

INSERT INTO curso VALUES	(285,'Sistemas Operativos 2', 4, '281', 'Curso avanzado de creacion de sistemas operativos'),
                            (975,'Redes de Computadoras 2', 4, '970', 'Curso avanzado de administracion de redes de sistemas computacionales'),
                            (775,'Sistemas De Bases de Datos 2', 4, '281, 774', 'Curso avanzado de manejo de bases de datos'),
                            (283,'Analisis y Diseño de Sistemas 1', 5, '774', 'Curso introductivo a la aplicacion de teoria y planificacion de los sistemas'),
							(797,'Seminario de Sistemas 1', 3, '724', 'Curso teorico introductivo de administracion de sistemas');

INSERT INTO curso VALUES	(729,'Modelacion Y Simulacion 1', 5, '724, 603', 'Curso introductivo a la modelacion y simulacion de sistemas'),
							(786,'Sistemas Organisacionales Y Gerenciales 1', 4, '283, 722', 'Curso introductivo a la organizacion y gerencia de sistemas'),
							(972,'Inteligencia Artificial 1', 4, '781, 775, 724', 'Curso introductivo de inteligencia artificial'),
                            (785,'Analisis y Diseño de Sistemas 2', 5, '283', 'Curso avanzado del analisis y el disenio de los sistemas'),
                            (798,'Seminario de Sistemas 2', 3, '797', 'Curso avanzado de estudios teorico de sistemas'),
                            (2037,'Practica Final ', 0, '2036', 'Curso de aplicacion de ingenieria en  sistemas');

INSERT INTO curso VALUES	(787,'Sistemas Organisacionales Y Gerenciales 2', 4, '786', 'Curso avanzado de tecnicas de organizacion y gerencia de sistemas'),
							(720,'Modelacion Y Simulacion 2', 5, '729', 'Curso avanzado de modelacion y simulacion de sistemas'),
							(780,'Software Avanzado', 6, '785', 'Curso avanzado de inteligencia artificial'),
                            (799,'Seminario de Investigacion', 3, '798', 'Curso teorico de aplicacion de estudios teorico de sistemas');


SELECT * FROM curso;
                            
INSERT INTO curso VALUES(6,'mat basica 2',5, null);
