echo "borrando..."

docker image rm home-cloud-backend
docker image rm home-cloud-backend-dev
docker image rm home-cloud-frontend
docker image rm home-cloud-frontend-dev

echo "READY :)"

docker images