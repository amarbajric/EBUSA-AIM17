/* vorhandene Daten (bis auf admin) aus der Datenbank entfernen*/


SET SQL_SAFE_UPDATES = 0;
SET FOREIGN_KEY_CHECKS = 0; 


TRUNCATE TABLE ippr_security.organization;

DELETE FROM ippr_security.user
WHERE email <> 'admin@ebusa.com';



DELETE FROM ippr_security.user_role_map
WHERE u_id NOT IN (SELECT u_id FROM ippr_security.user WHERE email = 'admin@ebusa.com');

TRUNCATE TABLE ippr_store.processstore;

TRUNCATE TABLE ippr_store.processrating;

TRUNCATE TABLE ippr_store.processorgamapping;

SET FOREIGN_KEY_CHECKS = 1; 

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
SELECT 100, '2018-06-10 22:41:32', 't.ort@mann.com', 'Thomas', 'Ortmann', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'ORTMANN_T', 'ortmannt', NULL
UNION ALL
SELECT 101, '2018-05-11 10:49:15', '', 'Amar', 'Bajric', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'BAJRIC_A', 'bajrica', 101
UNION ALL
SELECT 102, '2018-05-11 11:22:22', '', 'Michael', 'Fuchs', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'FUCHS_M', 'fuchsm', 101
UNION ALL
SELECT 103, '2018-05-11 12:29:11', '', 'Felix', 'Graf', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'GRAF_F', 'graff', 101
UNION ALL
SELECT 104, '2018-05-11 17:32:01', '', 'Nina', 'Spalek', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'SPALEK_N', 'spalekn', 101
UNION ALL
SELECT 105, '2018-05-11 21:55:55', '', 'Stefan', 'Leitner', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'LEITNER_S', 'leitners', 101
UNION ALL
SELECT 106, '2018-05-11 08:13:27', '', 'Max', 'Wageneder', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'WAGENEDER_M', 'wagenederm', 101
UNION ALL
SELECT 107, '2018-05-11 23:09:09', '', 'Laura', 'Dietrich', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'DIETRICH_L', 'dietrichl', 101
UNION ALL
SELECT 108, '2018-05-11 04:26:11', '', 'Alexander', 'Lichtenegger', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'LICHTENEGGER_A', 'lichteneggera', 101
UNION ALL
SELECT 109, '2018-05-11 12:00:00', '', 'Robert', 'Singer', '$2a$10$CQKmTSfJsGKDVOxbgCzo/e2Oxyo5I2V.CHWHCNIlUhlYfWgTobXke', 'SINGER_R', 'singerr', 100;


/*
	Ortmann noch in keiner Organisation --> nur USER (zur Demonstration von "create organization")
    Bajric ORG_CEO von EasyBiz
    Singer ORG_CEO von FH
    alle anderen --> ORG_EMP von EasyBiz
*/

INSERT INTO ippr_security.user_role_map
(
	u_id,
    role_id
)
SELECT 100, 6
UNION ALL
SELECT 101, 6
UNION ALL
SELECT 101, 8
UNION ALL
SELECT 102, 6
UNION ALL
SELECT 102, 7
UNION ALL
SELECT 103, 6
UNION ALL
SELECT 103, 7
UNION ALL
SELECT 104, 6
UNION ALL
SELECT 104, 7
UNION ALL
SELECT 105, 6
UNION ALL
SELECT 105, 7
UNION ALL
SELECT 106, 6
UNION ALL
SELECT 106, 7
UNION ALL
SELECT 107, 6
UNION ALL
SELECT 107, 7
UNION ALL
SELECT 108, 6
UNION ALL
SELECT 108, 7
UNION ALL
SELECT 109, 6
UNION ALL
SELECT 109, 8;

/*
	TODO 
    
		- processstore
        - rating
        - review

*/


/* SELECT * FROM ippr_store.processstore */

INSERT INTO ippr_store.processstore
(
	process_id,
    is_approved,
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
SELECT 100, 1, NULL, NULL, NULL, '2018-06-10 22:41:32', 'FUCHS_M', 'Communcation between employees and their supervisors for the handling of an application for a business trip', NULL, 'Business Trip Application', 199.90, 1
UNION ALL
SELECT 101, 1, NULL, NULL, NULL, '2018-06-10 12:20:35', 'FUCHS_M', 'This process describes a usual purchase process with the roles of a customer and a seller', NULL, 'Purchase', 89.99, 2
UNION ALL
SELECT 102, 1, NULL, NULL, NULL, '2018-06-10 14:14:33', 'BAJRIC_A', 'This process describes the steps which need to be handled during an employment of a new employee', NULL, 'Employment', 12.00, 3
UNION ALL
SELECT 103, 1, NULL, NULL, NULL, '2018-06-10 04:33:32', 'BAJRIC_A', 'Descirbes a change request of a customer for a process in the EasyBiz process portal', NULL, 'Change Request', 349.90, 1
UNION ALL
SELECT 104, 1, NULL, NULL, NULL, '2018-06-10 10:14:14', 'BAJRIC_A', 'This process describes a purchase of a process instance in the process portal of EasyBiz', NULL, 'Purchase of Process Instance', 100.00, 4
UNION ALL
SELECT 105, 1, NULL, NULL, NULL, '2018-06-10 19:21:32', 'BAJRIC_A', 'Describes the process of validation of a process model in the EasyBiz company', NULL, 'Upload Validation', 199.90, 84
UNION ALL
SELECT 106, 1, NULL, NULL, NULL, '2018-06-10 14:53:18', 'WAGENEDER_M', 'This process describes the registration process in the company EasyBiz', NULL, 'Registration', 199.90, 6
UNION ALL
SELECT 107, 1, NULL, NULL, NULL, '2018-06-10 08:10:32', 'WAGENEDER_M', 'This process describes handling of an order over the different departments of an organization', NULL, 'Order Transaction', 199.90, 21
UNION ALL
SELECT 108, 1, NULL, NULL, NULL, '2018-06-10 12:15:25', 'WAGENEDER_M', 'This process describes the in-patient admission into a ward of the hospital', NULL, 'In-patient Admission', 199.90, 16
UNION ALL
SELECT 109, 1, NULL, NULL, NULL, '2018-06-10 03:34:32', 'WAGENEDER_M', 'This process describes the procurement of materials in a company with the role of a supplier', NULL, 'Material Procurement', 199.90, 4
UNION ALL
SELECT 110, 1, NULL, NULL, NULL, '2018-06-10 09:15:32', 'SINGER_R', 'This process describes the supply of a retailer by a wholesaler', NULL, 'Supply Process', 199.90, 2;


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
