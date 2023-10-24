# syntax=docker/dockerfile:1

FROM python:3.11.6-bookworm
WORKDIR /backend
COPY ./backend/requirements.txt requirements.txt
RUN pip install psycopg2 alembic
RUN pip install -r requirements.txt
ENTRYPOINT ["bash","./docker-entry-point.sh"]
EXPOSE 50051
