-- Insertar datos en tbl_finance_full_centers_cost
INSERT INTO tbl_finance_full_centers_cost (id_center_cost, description) VALUES
(1, 'Centro de Costo A'),
(2, 'Centro de Costo B'),
(3, 'Centro de Costo C'),
(4, 'Centro de Costo D'),
(5, 'Centro de Costo E'),
(6, 'Centro de Costo F'),
(7, 'Centro de Costo G'),
(8, 'Centro de Costo H'),
(9, 'Centro de Costo I'),
(10, 'Centro de Costo J');

-- Insertar datos en tbl_collection_accounts_source_target
INSERT INTO tbl_collection_accounts_source_target (id_source_target, description, status) VALUES
(1, 'Fuente A - Destino X', 1),
(2, 'Fuente B - Destino Y', 1),
(3, 'Fuente C - Destino Z', 0),
(4, 'Fuente D - Destino W', 1),
(5, 'Fuente E - Destino V', 0),
(6, 'Fuente F - Destino U', 1),
(7, 'Fuente G - Destino T', 1),
(8, 'Fuente H - Destino S', 0),
(9, 'Fuente I - Destino R', 1),
(10, 'Fuente J - Destino Q', 1);

-- Insertar datos en tbl_collection_accounts_type_vehicle
INSERT INTO tbl_collection_accounts_type_vehicle (id_type_vehicle, description) VALUES
(1, 'Sedán'),
(2, 'Camioneta'),
(3, 'Camión'),
(4, 'Moto'),
(5, 'Bicicleta'),
(6, 'Furgón'),
(7, 'Autobús'),
(8, 'Pick-up'),
(9, 'Convertible'),
(10, 'SUV');

-- Insertar datos en tbl_collection_accounts_providers
INSERT INTO tbl_collection_accounts_providers (id_provider, id_type_provider, description) VALUES
(1, 1, 'Proveedor A'),
(2, 2, 'Proveedor B'),
(3, 1, 'Proveedor C'),
(4, 2, 'Proveedor D'),
(5, 1, 'Proveedor E'),
(6, 2, 'Proveedor F'),
(7, 1, 'Proveedor G'),
(8, 2, 'Proveedor H'),
(9, 1, 'Proveedor I'),
(10, 2, 'Proveedor J');

-- Insertar datos en tbl_collection_accounts_vehicles
INSERT INTO tbl_collection_accounts_vehicles (id_vehicles, plate, id_type_vehicle, id_provider) VALUES
(1, 'ABC123', 1, 1),
(2, 'XYZ456', 2, 2),
(3, 'LMN789', 3, 3),
(4, 'PQR321', 4, 4),
(5, 'JKL654', 5, 5),
(6, 'MNO987', 6, 6),
(7, 'DEF147', 7, 7),
(8, 'GHI258', 8, 8),
(9, 'RST369', 9, 9),
(10, 'UVW741', 10, 10);

-- Insertar datos en tbl_collection_accounts_drivers
INSERT INTO tbl_collection_accounts_drivers (id_driver, first_name, last_name, id_provider) VALUES
(1, 'Juan', 'Pérez', 1),
(2, 'Ana', 'González', 2),
(3, 'Carlos', 'Martínez', 3),
(4, 'Lucía', 'Rodríguez', 4),
(5, 'Pedro', 'Fernández', 5),
(6, 'Marta', 'López', 6),
(7, 'Luis', 'Sánchez', 7),
(8, 'Patricia', 'Torres', 8),
(9, 'David', 'Ramírez', 9),
(10, 'Elena', 'Gómez', 10);

-- Insertar datos en tbl_collection_accounts_status_process
INSERT INTO tbl_collection_accounts_status_process (id_status_process, description) VALUES
(1, 'En proceso'),
(2, 'Completado'),
(3, 'Cancelado'),
(4, 'Pendiente'),
(5, 'Aprobado'),
(6, 'Rechazado'),
(7, 'En espera'),
(8, 'En revisión'),
(9, 'Verificado'),
(10, 'En tránsito');

-- Insertar datos en tbl_collection_accounts_journey_request
INSERT INTO tbl_collection_accounts_journey_request (id_journey_request, request_date, id_user, id_source, id_target, service_date, service_hour, id_center_cost, id_status, cancellation_motive) VALUES
(1, '2024-11-01 08:00:00', 1, 1, 2, '2024-11-01', '08:30', 1, 1, NULL),
(2, '2024-11-02 09:00:00', 2, 2, 3, '2024-11-02', '09:00', 2, 2, NULL),
(3, '2024-11-03 10:00:00', 3, 3, 1, '2024-11-03', '10:30', 3, 3, 'Cambio de planes'),
(4, '2024-11-04 11:00:00', 4, 4, 5, '2024-11-04', '11:30', 4, 4, NULL),
(5, '2024-11-05 12:00:00', 5, 5, 6, '2024-11-05', '12:30', 5, 5, NULL),
(6, '2024-11-06 13:00:00', 6, 6, 7, '2024-11-06', '13:30', 6, 6, 'Solicitud cancelada'),
(7, '2024-11-07 14:00:00', 7, 7, 8, '2024-11-07', '14:30', 7, 7, NULL),
(8, '2024-11-08 15:00:00', 8, 8, 9, '2024-11-08', '15:30', 8, 8, NULL),
(9, '2024-11-09 16:00:00', 9, 9, 10, '2024-11-09', '16:30', 9, 9, 'Cancelación por mal tiempo'),
(10, '2024-11-10 17:00:00', 10, 10, 1, '2024-11-10', '17:30', 10, 10, NULL);

-- Insertar datos en tbl_collection_accounts_confirm_request
INSERT INTO tbl_collection_accounts_confirm_request (id_confirm_request, id_journey_request, id_vehicle, id_provider, confirmacion_date, id_driver) VALUES
(1, 1, 1, 1, '2024-11-01 08:30:00', 1),
(2, 2, 2, 2, '2024-11-02 09:30:00', 2),
(3, 3, 3, 3, '2024-11-03 10:30:00', 3),
(4, 4, 4, 4, '2024-11-04 11:30:00', 4),
(5, 5, 5, 5, '2024-11-05 12:30:00', 5),
(6, 6, 6, 6, '2024-11-06 13:30:00', 6),
(7, 7, 7, 7, '2024-11-07 14:30:00', 7),
(8, 8, 8, 8, '2024-11-08 15:30:00', 8),
(9, 9, 9, 9, '2024-11-09 16:30:00', 9),
(10, 10, 10, 10, '2024-11-10 17:30:00', 10);

-- Insertar datos en tbl_collection_accounts_rates
INSERT INTO tbl_collection_accounts_rates (id_rate, id_type_provider, id_source, id_target, type_vehicle, value) VALUES
(1, 1, 'Fuente A', 'Destino Y', 1, 1000),
(2, 2, 'Fuente B', 'Destino Z', 2, 1500),
(3, 1, 'Fuente C', 'Destino X', 3, 2000),
(4, 2, 'Fuente D', 'Destino W', 1, 2500),
(5, 1, 'Fuente E', 'Destino V', 2, 3000),
(6, 2, 'Fuente F', 'Destino U', 3, 3500),
(7, 1, 'Fuente G', 'Destino T', 1, 4000),
(8, 2, 'Fuente H', 'Destino S', 2, 4500),
(9, 1, 'Fuente I', 'Destino R', 3, 5000),
(10, 2, 'Fuente J', 'Destino Q', 1, 5500);

-- Insertar datos en tbl_collection_accounts_request_novelty
INSERT INTO tbl_collection_accounts_request_novelty (id_request_novelty, id_novelty, id_journey_request) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5),
(6, 6, 6),
(7, 7, 7),
(8, 8, 8),
(9, 9, 9),
(10, 10, 10);

-- Insertar datos en tbl_collection_accounts_types_novelty
INSERT INTO tbl_collection_accounts_types_novelty (id_type_novelty, id_provider, description, id_status, value, id_novelty) VALUES
(1, 1, 'Retraso en la llegada', 1, 200, 1),
(2, 2, 'Cambio de vehículo', 2, 300, 2),
(3, 3, 'Cancelación por motivos personales', 3, 500, 3),
(4, 4, 'Accidente de tránsito', 4, 600, 4),
(5, 5, 'Falta de combustible', 5, 700, 5),
(6, 6, 'Problema mecánico', 6, 800, 6),
(7, 7, 'Retraso de la carretera', 7, 900, 7),
(8, 8, 'Solicitud de cambio de hora', 8, 1000, 8),
(9, 9, 'Falta de conductores', 9, 1100, 9),
(10, 10, 'Cancelación por mal tiempo', 10, 1200, 10);

-- Insertar datos en tbl_collection_relation_request_rate
INSERT INTO tbl_collection_relation_request_rate (id_request_rate, id_request, id_novelty, id_rate) VALUES
(1, 1, 1, 1),
(2, 2, 2, 2),
(3, 3, 3, 3),
(4, 4, 4, 4),
(5, 5, 5, 5),
(6, 6, 6, 6),
(7, 7, 7, 7),
(8, 8, 8, 8),
(9, 9, 9, 9),
(10, 10, 10, 10);
