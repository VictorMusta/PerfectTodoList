# syntax=docker/dockerfile:1

FROM python:slim
WORKDIR /backend
COPY ./backend .
RUN apt-get update && apt-get install -y postgresql postgresql-contrib libpq-dev python3-dev build-essential
RUN pip install psycopg2 alembic
RUN pip install -r requirements.txt
ENTRYPOINT ["bash","./docker-entry-point.sh"]
EXPOSE 50051
