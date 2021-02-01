CREATE TABLE IF NOT EXISTS USER (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    sexe VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    hash VARCHAR(100) NOT NULL,
    active int(1) NOT NULL DEFAULT '0',
    UNIQUE KEY unique_email (email)
);

CREATE TABLE IF NOT EXISTS SEANCES (
    user_id INT NOT NULL,
    unique_id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    type VARCHAR(30),
    title VARCHAR (100),
    score_endurance INT NOT NULL,
    score_force INT NOT NULL,
    score_agilite INT NOT NULL,
    niveau INT NOT NULL,
    echauffement VARCHAR(300),
    modalite INT,
    exo1_modalite INT,
    exo1 VARCHAR(30),
    exo1_perso VARCHAR(300),
    exo1_nb_rep INT,
    exo1_tps_rep TIME,
    exo1_distance FLOAT,
    exo1_commentaire VARCHAR(300),
    exo2_modalite INT,
    exo2 VARCHAR(30),
    exo2_perso VARCHAR(300),
    exo2_nb_rep INT,
    exo2_tps_rep TIME,
    exo2_distance FLOAT,
    exo2_commentaire VARCHAR(300),
    recup_petite TIME,
    recup_type VARCHAR(30),
    nb_bloc INT,
    recup_bloc TIME,
    commentaire_ge VARCHAR(300),
    custom_seance VARCHAR(500)
)


CREATE TABLE IF NOT EXISTS EXERCICES (
    person_id INT NOT NULL,
    unique_id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    nom_fichier VARCHAR(30),
    nom_exo VARCHAR(50),
    elastique BOOLEAN  default false,
    haltere BOOLEAN  default false,
    step BOOLEAN  default false,
    epaule BOOLEAN  default false,
    dos BOOLEAN  default false,
    pecs BOOLEAN  default false,
    bras BOOLEAN  default false,
    fessiers BOOLEAN  default false,
    jambes BOOLEAN  default false,
    mollets BOOLEAN  default false,
    ceinture_abdominale BOOLEAN  default false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS BLOC (
    id_seance INT,
    genre VARCHAR(50),
    part VARCHAR(1),
    nb_serie INT,
    type VARCHAR(30),
    nom_exo VARCHAR(100),
    id_exo VARCHAR(4),
    nb_rep INT,
    distance FLOAT,
    temps TIME,
    type_recup VARCHAR(50),
    commmentaires VARCHAR(300)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS SEANCES_2 (
    id_seance INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    type VARCHAR(100),
    nom_seance VARCHAR(200),
    niveau INT,
    score_endurance INT,
    score_force INT,
    score_agilite INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS WEMWBS (
    user_id INT NOT NULL,
    unique_id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    a INT,
    b INT,
    c INT,
    d INT,
    e INT,
    f INT,
    g INT,
    h INT,
    i INT,
    j INT,
    k INT,
    l INT,
    m INT,
    n INT,
    resultat INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS ISI (
    user_id INT NOT NULL,
    unique_id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    q1a INT,
    q1b INT,
    q1c INT,
    q2 INT,
    q3 INT,
    q4 INT,
    q5 INT,
    resultat INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS ACTIVITY (
    user_id INT NOT NULL,
    unique_id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    date timestamp NULL DEFAULT NULL,
    modalite VARCHAR(100),
    duree int(4),
    intensite int(2),
    commentaire VARCHAR(300)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS MATERIEL_USER (
    user_id INT NOT NULL,
    id_materiel INT NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS SEANCE_SAUVEGARDEE (
    unique_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    nom VARCHAR(300) NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS SEANCE_SAUVEGARDEE_DETAIL (
    unique_id INT,
    id_bloc INT,
    ordre INT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS SEANCE_FAITE (
    unique_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    nb_bloc INT NOT NULL,
    created_at TIMESTAMP NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS SEANCE_FAITE_DETAIL (
    id_seance_detail INT AUTO_INCREMENT PRIMARY KEY,
    id_seance INT NOT NULL,
    id_bloc INT NOT NULL,
    ordre INT NOT NULL,
    created_at TIMESTAMP NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS SEANCE_BLOC_FEEDBACK (
    id_bloc_detail INT AUTO_INCREMENT PRIMARY KEY,
    id_seance_detail INT NOT NULL,
    qualite INT,
    difficulte INT,
    created_at TIMESTAMP NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8;