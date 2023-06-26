FROM mariadb:10.5.8

ADD ./database/fitness-park-database.sql /docker-entrypoint-initdb.d