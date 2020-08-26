create database soap_fase2;

use soap_fase2;

CREATE TABLE carrera(
	codigo_carrera INTEGER NOT NULL PRIMARY KEY,
	nombre         VARCHAR(30)
);

CREATE TABLE curso(
	codigo_curso INTEGER NOT NULL PRIMARY KEY,
	nombre_curso VARCHAR(30),
	creditos     INTEGER,
    CONSTRAINT CHK_creditos  CHECK(creditos > 0)
);

CREATE TABLE pensum(
	codigo_pensum INTEGER NOT NULL PRIMARY KEY,
	carrera       VARCHAR(30)
);

CREATE TABLE usuario(
	carnet             INTEGER NOT NULL PRIMARY KEY,
	nombre             VARCHAR(30),
	apellidos          VARCHAR(50),
	CUI            	   INTEGER UNIQUE,
	ref_codigo_carrera INTEGER NOT NULL,
	CONSTRAINT fk_carrera  FOREIGN KEY(ref_codigo_carrera) REFERENCES carrera(codigo_carrera) ON DELETE CASCADE 
);

CREATE TABLE curso_pensum(
	ref_codigo_curso   INTEGER NOT NULL,
	ref_codigo_pensum  INTEGER NOT NULL,
	ref_codigo_carrera     INTEGER NOT NULL,
    CONSTRAINT pk_curso  PRIMARY KEY(ref_codigo_curso,ref_codigo_pensum,ref_codigo_carrera),
    CONSTRAINT fk_curso_pensum     FOREIGN KEY(ref_codigo_curso)  REFERENCES curso(codigo_curso) ON DELETE CASCADE,
    CONSTRAINT fk_pensum_pensum    FOREIGN KEY(ref_codigo_pensum) REFERENCES pensum(codigo_pensum) ON DELETE CASCADE,
    CONSTRAINT fk_carrera_pensum   FOREIGN KEY(ref_codigo_carrera)REFERENCES carrera(codigo_carrera) ON DELETE CASCADE
);

CREATE TABLE usuario_curso(
	ref_carnet INTEGER NOT NULL,
	ref_codigo_curso   INTEGER NOT NULL,
	estado             INTEGER NOT NULL,
    CONSTRAINT CHK_estado  CHECK(estado >=0 and estado <=1),
    CONSTRAINT fk_usuario  FOREIGN KEY(ref_carnet) REFERENCES usuario(carnet) ON DELETE CASCADE,
    CONSTRAINT fk_curso    FOREIGN KEY(ref_codigo_curso)   REFERENCES curso(codigo_curso) ON DELETE CASCADE
);




