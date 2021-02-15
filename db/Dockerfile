FROM mysql:5.7

ENV MYSQL_DATABASE sgt
ENV MYSQL_ROOT_PASSWORD supersecret
ENV MYSQL_USER root
ENV MYSQL_PASSWORD supersecret
ENV DATABASE_HOST db

COPY ./sql-scripts /docker-entrypoint-initdb.d/
