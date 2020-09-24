SELECT usuario.nombre,usuario.carnet,
curso.nombre_curso,curso.creditos,
usuario_curso.estado
from usuario_curso
INNER JOIN usuario ON usuario_curso.ref_carnet=usuario.carnet
INNER JOIN curso ON  usuario_curso.ref_codigo_curso=codigo_curso
WHERE usuario.carnet=2023;

-- consulta sobre viualizacion curso
select cr.codigo_curso,cr.nombre_curso,cr.creditos,cr.prerequisitos,
cr.detalle,pn.codigo_pensum,pn.carrera as 'pensum',car.codigo_carrera,car.nombre as 'carrera' from curso_pensum
INNER JOIN curso cr ON curso_pensum.ref_codigo_curso=cr.codigo_curso
INNER JOIN pensum pn ON curso_pensum.ref_codigo_pensum=pn.codigo_pensum
INNER JOIN carrera car ON curso_pensum.ref_codigo_carrera=car.codigo_carrera
WHERE car.codigo_carrera=1;
