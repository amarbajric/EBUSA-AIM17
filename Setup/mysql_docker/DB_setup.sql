-- Create databases which are not automatically created out of the code
CREATE DATABASE ippr;
CREATE DATABASE ippr_security;
CREATE DATABASE ippr_store;

-- Create User for the services to access the DB
CREATE USER 'ippr'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Pa$$w0rd';
GRANT ALL PRIVILEGES ON * . * TO 'ippr'@'localhost';
CREATE USER 'ippr'@'%' IDENTIFIED WITH mysql_native_password BY 'Pa$$w0rd';
GRANT ALL PRIVILEGES ON * . * TO 'ippr'@'%';
FLUSH PRIVILEGES;

