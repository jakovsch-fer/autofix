CREATE TABLE autoservis (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    ime VARCHAR(100) NOT NULL
);

CREATE TABLE klijent (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    ime VARCHAR(100) NOT NULL,
	prezime VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE radnici (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	id_autoservis BIGINT REFERENCES autoservis(id),
    ime VARCHAR(100) NOT NULL,
	prezime VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE automobili (
    id_auto BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_klijent BIGINT REFERENCES klijent(id)
);



CREATE TABLE voditelj (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    ime VARCHAR(100) NOT NULL,
	prezime VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE vozilo_radnik (
	id_vozilo BIGINT REFERENCES automobili(id_auto),
	id_radnik BIGINT REFERENCES radnici(id),
	PRIMARY KEY(id_vozilo, id_radnik)
);





