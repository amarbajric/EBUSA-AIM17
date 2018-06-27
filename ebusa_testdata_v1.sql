/* vorhandene Daten (bis auf admin) aus der Datenbank entfernen*/


SET SQL_SAFE_UPDATES = 0;
SET FOREIGN_KEY_CHECKS = 0; 

COMMIT;
TRUNCATE TABLE ippr_security.organization;
COMMIT;

DELETE FROM ippr_security.user
WHERE email <> 'admin@ebusa.com';
COMMIT;


DELETE FROM ippr_security.user_role_map
WHERE u_id NOT IN (SELECT u_id FROM ippr_security.user WHERE email = 'admin@ebusa.com');
COMMIT;

TRUNCATE TABLE ippr_store.processstore;
COMMIT;

TRUNCATE TABLE ippr_store.processrating;
COMMIT;

TRUNCATE TABLE ippr_store.processorgamapping;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1; 

COMMIT;
/* neue Daten einfügen*/

INSERT INTO ippr_security.organization
(
	o_id,
    organization_description,
    organization_name,
    system_id
)
SELECT 100, 'University of Applied Sciences Graz', 'FH Joanneum', 'JOANNEUM_SYS_ID'
UNION ALL
SELECT 101, 'S-BPM as a Service', 'EasyBiz', 'EASYBIZ_SYS_ID';


COMMIT;


/*
	Ortmann			-->	keine Organisation
    Singer 				-->	Organisation FH Joanneum
    alle anderen 	-->	Organisation EasyBiz
*/

INSERT INTO ippr_security.user
(
	u_id,
    created_at,
    email,
    firstname,
    lastname,
    password,
    system_id,
    username,
    o_id
)
SELECT 100, '2018-06-10 22:41:32', 't.ort@mann.com', 'Thomas', 'Ortmann', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'ORTMANN_T', 'ORTMANN_T', NULL
UNION ALL
SELECT 101, '2018-05-11 10:49:15', 'a.baj@ric.com', 'Amar', 'Bajric', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'BAJRIC_A', 'BAJRIC_A', 101
UNION ALL
SELECT 102, '2018-05-11 11:22:22', 'm.fuc@hs.com', 'Michael', 'Fuchs', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'FUCHS_M', 'FUCHS_M', 101
UNION ALL
SELECT 103, '2018-05-11 12:29:11', 'f.gra@f.com', 'Felix', 'Graf', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'GRAF_F', 'GRAF_F', 101
UNION ALL
SELECT 104, '2018-05-11 17:32:01', 'n.spa@lek.com', 'Nina', 'Spalek', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'SPALEK_N', 'SPALEK_N', 101
UNION ALL
SELECT 105, '2018-05-11 21:55:55', 's.lei@tner.com', 'Stefan', 'Leitner', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'LEITNER_S', 'LEITNER_S', 101
UNION ALL
SELECT 106, '2018-05-11 08:13:27', 'm.wag@eneder.com', 'Max', 'Wageneder', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'WAGENEDER_M', 'WAGENEDER_M', 101
UNION ALL
SELECT 107, '2018-05-11 23:09:09', 'l.die@trich.com', 'Laura', 'Dietrich', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'DIETRICH_L', 'DIETRICH_L', 101
UNION ALL
SELECT 108, '2018-05-11 04:26:11', 'a.lic@htenegger.com', 'Alexander', 'Lichtenegger', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'LICHTENEGGER_A', 'LICHTENEGGER_A', 101
UNION ALL
SELECT 109, '2018-05-11 12:00:00', 'r.sin@ger.com', 'Robert', 'Singer', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'SINGER_R', 'SINGER_R', 100;


COMMIT;


/*
	Ortmann noch in keiner Organisation --> nur USER (zur Demonstration von "create organization")
    Bajric ORG_CEO von EasyBiz
    Singer ORG_CEO von FH
    alle anderen --> ORG_EMP von EasyBiz
    
    SELECT * FROM  ippr_security.user_role_map
    
    SELECT * FROM ippr_security.role
*/

INSERT INTO ippr_security.user_role_map
(
	u_id,
    role_id
)
SELECT 100, (SELECT role_id FROM ippr_security.role WHERE system_id = 'USER')
UNION ALL
SELECT 101, (SELECT role_id FROM ippr_security.role WHERE system_id = 'USER')
UNION ALL
SELECT 101, (SELECT role_id FROM ippr_security.role WHERE system_id = 'ORG_CEO')
UNION ALL
SELECT 102, (SELECT role_id FROM ippr_security.role WHERE system_id = 'USER')
UNION ALL
SELECT 102, (SELECT role_id FROM ippr_security.role WHERE system_id = 'ORG_EMP')
UNION ALL
SELECT 103, (SELECT role_id FROM ippr_security.role WHERE system_id = 'USER')
UNION ALL
SELECT 103, (SELECT role_id FROM ippr_security.role WHERE system_id = 'ORG_EMP')
UNION ALL
SELECT 103, (SELECT role_id FROM ippr_security.role WHERE system_id = 'SYS_APPROVER')
UNION ALL
SELECT 104, (SELECT role_id FROM ippr_security.role WHERE system_id = 'USER')
UNION ALL
SELECT 104, (SELECT role_id FROM ippr_security.role WHERE system_id = 'ORG_EMP')
UNION ALL
SELECT 105, (SELECT role_id FROM ippr_security.role WHERE system_id = 'USER')
UNION ALL
SELECT 105, (SELECT role_id FROM ippr_security.role WHERE system_id = 'ORG_EMP')
UNION ALL
SELECT 106, (SELECT role_id FROM ippr_security.role WHERE system_id = 'USER')
UNION ALL
SELECT 106, (SELECT role_id FROM ippr_security.role WHERE system_id = 'ORG_EMP')
UNION ALL
SELECT 107, (SELECT role_id FROM ippr_security.role WHERE system_id = 'USER')
UNION ALL
SELECT 107, (SELECT role_id FROM ippr_security.role WHERE system_id = 'ORG_EMP')
UNION ALL
SELECT 108, (SELECT role_id FROM ippr_security.role WHERE system_id = 'USER')
UNION ALL
SELECT 108, (SELECT role_id FROM ippr_security.role WHERE system_id = 'ORG_EMP')
UNION ALL
SELECT 109, (SELECT role_id FROM ippr_security.role WHERE system_id = 'USER')
UNION ALL
SELECT 109, (SELECT role_id FROM ippr_security.role WHERE system_id = 'ORG_CEO');


COMMIT;




/* SELECT * FROM ippr_store.processstore */

INSERT INTO ippr_store.processstore
(
	process_id,
    process_approved,
    process_approved_date,
    process_approver,
    process_approver_comment,
    process_created_at,
    process_creator,
    process_description,
    process_file,
    process_name,
    process_price,
    process_version
)
SELECT 100, 1, '2018-06-10 14:14:33', 'GRAF_F', 'approved', '2018-06-10 22:41:32', 'FUCHS_M', 'Communcation between employees and their supervisors for the handling of an application for a business trip', NULL, 'Business Trip Application', 199.90, 1
UNION ALL
SELECT 101, 0, NULL, NULL, NULL, '2018-06-10 12:20:35', 'FUCHS_M', 'This process describes a usual purchase process with the roles of a customer and a seller', NULL, 'Purchase', 89.99, 2
UNION ALL
SELECT 102, 1, '2018-06-10 23:14:33', 'GRAF_F', 'approved', '2018-06-10 14:14:33', 'BAJRIC_A', 'This process describes the steps which need to be handled during an employment of a new employee', NULL, 'Employment', 12.00, 3
UNION ALL
SELECT 103, 0, NULL, NULL, NULL, '2018-06-10 04:33:32', 'BAJRIC_A', 'Descirbes a change request of a customer for a process in the EasyBiz process portal', NULL, 'Change Request', 349.90, 1
UNION ALL
SELECT 104, 1, '2018-06-10 10:14:33', 'GRAF_F', 'approved', '2018-06-10 10:14:14', 'BAJRIC_A', 'This process describes a purchase of a process instance in the process portal of EasyBiz', NULL, 'Purchase of Process Instance', 100.00, 4
UNION ALL
SELECT 105, 0, NULL, NULL, NULL, '2018-06-10 19:21:32', 'BAJRIC_A', 'Describes the process of validation of a process model in the EasyBiz company', NULL, 'Upload Validation', 199.90, 84
UNION ALL
SELECT 106, 0, NULL, NULL, NULL, '2018-06-10 14:53:18', 'WAGENEDER_M', 'This process describes the registration process in the company EasyBiz', NULL, 'Registration', 199.90, 6
UNION ALL
SELECT 107, 1, '2018-06-10 13:14:33', 'GRAF_F', 'approved', '2018-06-10 08:10:32', 'WAGENEDER_M', 'This process describes handling of an order over the different departments of an organization', NULL, 'Order Transaction', 199.90, 21
UNION ALL
SELECT 108, 1, '2018-06-10 20:14:33', 'GRAF_F', 'approved', '2018-06-10 12:15:25', 'WAGENEDER_M', 'This process describes the in-patient admission into a ward of the hospital', NULL, 'In-patient Admission', 199.90, 16
UNION ALL
SELECT 109, 1, '2018-06-10 21:14:33', 'GRAF_F', 'approved', '2018-06-10 03:34:32', 'WAGENEDER_M', 'This process describes the procurement of materials in a company with the role of a supplier', NULL, 'Material Procurement', 199.90, 4
UNION ALL
SELECT 110, 1, NULL, 'GRAF_F', NULL, '2018-06-10 09:15:32', 'SINGER_R', 'This process describes the supply of a retailer by a wholesaler', NULL, 'Supply Process', 199.90, 2;

COMMIT;

/*SELECT * FROM ippr_store.processorgamapping */

INSERT INTO ippr_store.processorgamapping
(
	orga_id,
    process_id,
    user_id
)
SELECT '101', '100', '102'
UNION ALL
SELECT '101', '103', '102'
UNION ALL
SELECT '101', '107', '103'
UNION ALL
SELECT '101', '108', '105'
UNION ALL
SELECT '101', '109', '105'
UNION ALL
SELECT '101', '110', '102'
UNION ALL
SELECT '100', '100', '109'
UNION ALL
SELECT '100', '102', '109'
UNION ALL
SELECT '100', '104', '109'
UNION ALL
SELECT '100', '109', '109';


COMMIT;

/* SELECT * FROM ippr_store.processrating */

INSERT INTO ippr_store.processrating
(
    comment,
    created_at,
    created_by,
    process_id,
    rating
)
SELECT 'This process has everything it needs to have and provides the full range of functionalities for our organization. Thank you very much!', '2018-06-10 09:15:32', 'Robert Singer', 100, 5
UNION ALL
SELECT 'I can''t agree with the comment before me since this process model does not fit my expectations at all and I am highly disappointed by the standards of the platform.', '2018-06-10 14:53:18', 'Thomas Ortmann', 100, 0
UNION ALL
SELECT 'The process for the in-patient admission represents exactly what our hospital needs and involves each important party in it, however I''m not quite happy with the consideration of the general practitioner into this process, maybe you could change that.', '2018-06-10 09:15:32', 'Amar Bajric', 108,4 ;

COMMIT;



DROP TRIGGER IF EXISTS ippr_store.add_orga_process_map;
COMMIT;


DELIMITER //
CREATE TRIGGER ippr_store.add_orga_process_map
AFTER INSERT ON ippr_store.processstore FOR EACH ROW
BEGIN 

	/* SELECT * FROM ippr_store.processorgamapping 
		SELECT * FROM ippr_store.processstore
    */

    

	INSERT INTO ippr_store.processorgamapping
    (
		orga_id,
        process_id,
        user_id
    )
    VALUES
    (
		(SELECT o_id FROM ippr_security.user WHERE username = NEW.process_creator),
		NEW.process_id,
        (SELECT u_id FROM ippr_security.user WHERE username = NEW.process_creator)
	);
    


END