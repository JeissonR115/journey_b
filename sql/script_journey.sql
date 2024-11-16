-- Crear tablas base sin claves foráneas
CREATE TABLE tbl_collection_accounts_journey_request (
  id_journey_request integer PRIMARY KEY,
  request_date timestamp,
  id_user integer,
  id_source integer,
  id_target integer,
  service_date timestamp,
  service_hour varchar(255),
  id_center_cost integer,
  id_status integer,
  cancellation_motive varchar(255)
);

CREATE TABLE tbl_collection_accounts_confirm_request (
  id_confirm_request integer PRIMARY KEY,
  id_journey_request integer,
  id_vehicle integer,
  id_provider integer,
  confirmacion_date timestamp,
  id_driver integer
);

CREATE TABLE tbl_finance_full_centers_cost (
  id_center_cost integer PRIMARY KEY,
  description varchar(255)
);

CREATE TABLE tbl_collection_accounts_source_target (
  id_source_target integer PRIMARY KEY,
  description varchar(255),
  status integer
);

CREATE TABLE tbl_collection_accounts_vehicles (
  id_vehicles integer PRIMARY KEY,
  plate varchar(255),
  id_type_vehicle integer,
  id_provider integer
);

CREATE TABLE tbl_collection_accounts_type_vehicle (
  id_type_vehicle integer PRIMARY KEY,
  description varchar(255)
);

CREATE TABLE tbl_collection_accounts_status_process (
  id_status_process integer PRIMARY KEY,
  description varchar(255)
);

CREATE TABLE tbl_collection_accounts_providers (
  id_provider integer PRIMARY KEY,
  id_type_provider integer,
  description varchar(255)
);

CREATE TABLE tbl_collection_accounts_drivers (
  id_driver integer PRIMARY KEY,
  first_name varchar(255),
  last_name varchar(255),
  id_provider integer
);

CREATE TABLE tbl_collection_accounts_rates (
  id_rate integer PRIMARY KEY,
  id_type_provider integer,
  id_source varchar(255),
  id_target varchar(255),
  type_vehicle integer,
  value integer
);

-- Crear las tablas de novedades (ahora se crean con las relaciones correctas)
CREATE TABLE tbl_collection_accounts_request_novelty (
  id_request_novelty integer PRIMARY KEY, 
  id_novelty integer,
  id_journey_request integer,
  FOREIGN KEY (id_journey_request) REFERENCES tbl_collection_accounts_journey_request (id_journey_request)
);

CREATE TABLE tbl_collection_accounts_types_novelty (
  id_type_novelty integer PRIMARY KEY,
  id_provider integer,
  description varchar(255),
  id_status integer,
  value integer,
  id_novelty integer,  
  FOREIGN KEY (id_provider) REFERENCES tbl_collection_accounts_providers (id_provider),
  FOREIGN KEY (id_novelty) REFERENCES tbl_collection_accounts_request_novelty (id_request_novelty)
);
-- Crear tabla de relación de request y rate
CREATE TABLE tbl_collection_relation_request_rate (
  id_request_rate integer PRIMARY KEY,
  id_request integer,
  id_novelty integer,
  id_rate integer
);


-- Relación entre tablas principales
ALTER TABLE tbl_collection_accounts_journey_request ADD FOREIGN KEY (id_status) REFERENCES tbl_collection_accounts_status_process (id_status_process);
ALTER TABLE tbl_collection_accounts_journey_request ADD FOREIGN KEY (id_center_cost) REFERENCES tbl_finance_full_centers_cost (id_center_cost);
ALTER TABLE tbl_collection_accounts_journey_request ADD FOREIGN KEY (id_source) REFERENCES tbl_collection_accounts_source_target (id_source_target);
ALTER TABLE tbl_collection_accounts_journey_request ADD FOREIGN KEY (id_target) REFERENCES tbl_collection_accounts_source_target (id_source_target);

ALTER TABLE tbl_collection_accounts_vehicles ADD FOREIGN KEY (id_type_vehicle) REFERENCES tbl_collection_accounts_type_vehicle (id_type_vehicle);

ALTER TABLE tbl_collection_accounts_confirm_request ADD FOREIGN KEY (id_journey_request) REFERENCES tbl_collection_accounts_journey_request (id_journey_request);
ALTER TABLE tbl_collection_accounts_confirm_request ADD FOREIGN KEY (id_vehicle) REFERENCES tbl_collection_accounts_vehicles (id_vehicles);

ALTER TABLE tbl_collection_accounts_rates ADD FOREIGN KEY (type_vehicle) REFERENCES tbl_collection_accounts_type_vehicle (id_type_vehicle);

-- Relación de providers con drivers y confirm requests
ALTER TABLE tbl_collection_accounts_drivers ADD FOREIGN KEY (id_provider) REFERENCES tbl_collection_accounts_providers (id_provider);
ALTER TABLE tbl_collection_accounts_confirm_request ADD FOREIGN KEY (id_provider) REFERENCES tbl_collection_accounts_providers (id_provider);

-- Relación de rates con request y novelty
ALTER TABLE tbl_collection_relation_request_rate ADD FOREIGN KEY (id_rate) REFERENCES tbl_collection_accounts_rates (id_rate);
ALTER TABLE tbl_collection_relation_request_rate ADD FOREIGN KEY (id_request) REFERENCES tbl_collection_accounts_journey_request (id_journey_request);
