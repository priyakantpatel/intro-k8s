# docker login
tag=2.0.0
docker build -t priyakant/hello-world-web-app:$tag .
docker tag priyakant/hello-world-web-app:$tag priyakant/hello-world-web-app:latest
docker push priyakant/hello-world-web-app:$tag
docker push priyakant/hello-world-web-app:latest

# docker pull priyakant/hello-world-web-app:1.0.0
# docker logout

# kubectl run curl --image=radial/busyboxplus:curl -i --tty