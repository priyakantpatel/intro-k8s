# docker login

docker build -t priyakant/hello-world-web-app:1.0.0 .
docker tag priyakant/hello-world-web-app:1.0.0 priyakant/hello-world-web-app:latest
docker push priyakant/hello-world-web-app:1.0.0
docker push priyakant/hello-world-web-app:latest

# docker pull priyakant/hello-world-web-app:1.0.0
# docker logout