CREATE TABLE `tbl_collection_accounts_journey_request` (
  `id_journey_request` INT PRIMARY KEY,
  `request_date` TIMESTAMP,
  `id_user` INT,
  `id_source` INT,
  `id_target` INT,
  `service_date` TIMESTAMP,
  `service_hour` VARCHAR(255),
  `id_center_cost` INT,
  `id_status` INT,
  `cancellation_motive` VARCHAR(255),
  FOREIGN KEY (`id_status`) REFERENCES `tbl_collection_accounts_status_process` (`id_status_process`),
  FOREIGN KEY (`id_center_cost`) REFERENCES `tbl_finance_full_centers_cost` (`id_center_cost`),
  FOREIGN KEY (`id_source`) REFERENCES `tbl_collection_accounts_source_target` (`id_source_target`),
  FOREIGN KEY (`id_target`) REFERENCES `tbl_collection_accounts_source_target` (`id_source_target`)
);

CREATE TABLE `tbl_collection_accounts_confirm_request` (
  `id_confirm_request` INT PRIMARY KEY,
  `id_journey_request` INT,
  `id_vehicle` INT,
  `id_provider` INT,
  `confirmation_date` TIMESTAMP,
  `id_driver` INT,
  FOREIGN KEY (`id_journey_request`) REFERENCES `tbl_collection_accounts_journey_request` (`id_journey_request`),
  FOREIGN KEY (`id_vehicle`) REFERENCES `tbl_collection_accounts_vehicles` (`id_vehicles`),
  FOREIGN KEY (`id_driver`) REFERENCES `tbl_collection_accounts_drivers` (`id_driver`)
);

CREATE TABLE `tbl_finance_full_centers_cost` (
  `id_center_cost` INT PRIMARY KEY,
  `description` VARCHAR(255)
);

CREATE TABLE `tbl_collection_accounts_source_target` (
  `id_source_target` INT PRIMARY KEY,
  `description` VARCHAR(255),
  `status` INT
);

CREATE TABLE `tbl_collection_accounts_vehicles` (
  `id_vehicles` INT PRIMARY KEY,
  `plate` VARCHAR(255),
  `id_type_vehicle` INT,
  `id_provider` INT,
  FOREIGN KEY (`id_type_vehicle`) REFERENCES `tbl_collection_accounts_type_vehicle` (`id_type_vehicle`)
);

CREATE TABLE `tbl_collection_accounts_type_vehicle` (
  `id_type_vehicle` INT PRIMARY KEY,
  `description` VARCHAR(255)
);

CREATE TABLE `tbl_collection_accounts_status_process` (
  `id_status_process` INT PRIMARY KEY,
  `description` VARCHAR(255)
);

CREATE TABLE `tbl_collection_accounts_types_novelty` (
  `id_type_novelty` INT PRIMARY KEY,
  `id_provider` INT,
  `description` VARCHAR(255),
  `id_status` INT,
  `value` INT,
  FOREIGN KEY (`id_provider`) REFERENCES `tbl_collection_accounts_providers` (`id_provider`)
);

CREATE TABLE `tbl_collection_accounts_request_novelty` (
  `id_request_novelty` INT,
  `id_novelty` INT,
  `id_journey_request` INT,
  PRIMARY KEY (`id_request_novelty`, `id_novelty`),
  FOREIGN KEY (`id_journey_request`) REFERENCES `tbl_collection_accounts_journey_request` (`id_journey_request`)
);

CREATE TABLE `tbl_collection_accounts_providers` (
  `id_provider` INT PRIMARY KEY,
  `id_type_provider` INT,
  `description` VARCHAR(255)
);

CREATE TABLE `tbl_collection_accounts_drivers` (
  `id_driver` INT PRIMARY KEY,
  `first_name` VARCHAR(255),
  `last_name` VARCHAR(255),
  `id_provider` INT,
  FOREIGN KEY (`id_provider`) REFERENCES `tbl_collection_accounts_providers` (`id_provider`)
);

CREATE TABLE `tbl_collection_accounts_rates` (
  `id_rate` INT PRIMARY KEY,
  `id_type_provider` INT,
  `id_source` INT,
  `id_target` INT,
  `type_vehicle` INT,
  `value` INT,
  FOREIGN KEY (`type_vehicle`) REFERENCES `tbl_collection_accounts_type_vehicle` (`id_type_vehicle`)
);

CREATE TABLE `tbl_collection_relation_request_rate` (
  `id_request_rate` INT PRIMARY KEY,
  `id_request` INT,
  `id_novelty` INT,
  `id_rate` INT,
  FOREIGN KEY (`id_request`) REFERENCES `tbl_collection_accounts_journey_request` (`id_journey_request`),
  FOREIGN KEY (`id_rate`) REFERENCES `tbl_collection_accounts_rates` (`id_rate`)
);
