FROM ubuntu:20.04

LABEL maintainer="Your Name <youremail@example.com>"

ENV MY_ENV_VARIABLE=value

RUN apt-get update && \
  apt-get install -y package-name && \
  apt-get clean

COPY ./local-path/file.txt /container-path/

WORKDIR /app

EXPOSE 8080

VOLUME /data

CMD ["command", "arg1", "arg2"]