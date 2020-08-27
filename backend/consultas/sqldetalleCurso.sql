SELECT usuario.nombre,usuario.carnet,
curso.nombre_curso,curso.creditos,
usuario_curso.estado
from usuario_curso
INNER JOIN usuario ON usuario_curso.ref_carnet=usuario.carnet
INNER JOIN curso ON  usuario_curso.ref_codigo_curso=codigo_curso
WHERE usuario.carnet=2023;