# command reference
# demo namespace
# Cluster IP - 52.167.10.241
# kubectl run curl --image=radial/busyboxplus:curl -i --tty

# get nodes
kubectl get nodes

# get pods
kubectl get pods

# get service
# kubectl get service --namespace patel-common
kubectl get service

# deploy
kubectl apply -f ./deploy-all.yaml

# deploy
kubectl delete -f ./deploy-all.yaml
