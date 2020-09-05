-- obtener los cursos asignados al usuario 
SELECT usuario.nombre,usuario.carnet,
curso.codigo_curso,curso.nombre_curso,curso.creditos,
usuario_curso.estado
from usuario_curso
INNER JOIN usuario ON usuario_curso.ref_carnet=usuario.carnet
INNER JOIN curso ON  usuario_curso.ref_codigo_curso=codigo_curso
WHERE usuario.carnet=2023;
-- Obtener detalle de curso para un usuario especifico
SELECT usuario.nombre,usuario.carnet,
    curso.nombre_curso,curso.creditos,
    usuario_curso.estado 
    from usuario_curso 
    INNER JOIN usuario ON usuario_curso.ref_carnet=usuario.carnet 
    INNER JOIN curso ON  usuario_curso.ref_codigo_curso=codigo_curso 
    WHERE usuario.carnet=2023 
    and curso.codigo_curso=281;

--consulta para realizar el login 
 select * from usuario
 where carnet=2023 and clave=123;   
