# syntax=docker/dockerfile:1

FROM python:slim
WORKDIR /backend
COPY . .
RUN pip install -r requirements.txt
CMD ["python3","grpc_server.py"]
EXPOSE 50051