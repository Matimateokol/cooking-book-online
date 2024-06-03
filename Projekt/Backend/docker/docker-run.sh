#Script config
MYSQL_VERSION=latest
MYSQL_ROOT_PASSWORD=dev_pass
MYSQL_DATABASE=mysql
MYSQL_CONTAINER_NAME=sequel_db
MYSQL_VOLUME_NAME=sequel_volume

if [ "$(docker ps -aq -f name=${MYSQL_CONTAINER_NAME})" ]; then
    docker rm -f ${MYSQL_CONTAINER_NAME}
fi

docker volume create ${MYSQL_VOLUME_NAME}

docker pull mysql:${MYSQL_VERSION}
docker run -d \
  --name ${MYSQL_CONTAINER_NAME} \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} \
  -e MYSQL_DATABASE=${MYSQL_DATABASE} \
  -v ${MYSQL_VOLUME_NAME}:/var/lib/mysql \
  mysql:${MYSQL_VERSION}

docker logs ${MYSQL_CONTAINER_NAME}