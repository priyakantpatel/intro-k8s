# https://hub.docker.com/ (Open free account)
# docker login

dockerUserName=priyakant
containerImageName=hello-world-web-app
tag=3.0.0

docker build -t $dockerUserName/$containerImageName:$tag .
docker tag $dockerUserName/$containerImageName:$tag $dockerUserName/$containerImageName:latest
docker push $dockerUserName/$containerImageName:$tag
docker push $dockerUserName/$containerImageName:latest

# docker pull priyakant/$containerImageName:1.0.0
# docker logout

# kubectl run curl --image=radial/busyboxplus:curl -i --tty