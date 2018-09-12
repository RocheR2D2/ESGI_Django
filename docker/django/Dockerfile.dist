FROM python:3

LABEL maintainer="Skyflow - Franck Diomandé <fkdiomande@gmail.com>"

ENV PYTHONUNBUFFERED 1
RUN mkdir /app
WORKDIR /app
ADD requirements.txt /app/
RUN pip install -r requirements.txt

