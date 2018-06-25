FROM mysql:5.7
MAINTAINER Amar Bajric (amar.bajric@edu.fh-joanneum.at)
ENV MYSQL_ROOT_PASSWORD="Pa$$w0rd"
RUN apt-get update
# check https://hub.docker.com/_/mysql/ for more info about this directory
COPY ./DB_setup.sql /docker-entrypoint-initdb.d/DB_setup.sql
# This .sh file is only needed for extra configuration. Not needed for basic set-up.
# COPY ./configure_mysql_docker.sh /docker-entrypoint-initdb.d/configure_mysql_docker.sh