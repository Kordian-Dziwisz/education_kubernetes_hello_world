# education_kubernetes_hello_world

The simple hello_world app presenting the creation of pods in kubernetes, it contains typescript app and the dockerbuild files.

You can use labels! for example you may write `kubectl get service -l type=education`, isn't it fascinating?

## To build a docker image:

`docker buildx build -t kordiandziwisz/education_kubernetes_hello_world ./docker`

## To run kubernetes pod

`kubectl apply -f service/hello-world.yaml`

## To run kubernetes service:

`kubectl apply -f service/hello-world.service.yaml`

### If using minikube

`minikube service hello-world` will show you the service port tunneled by the minikube

## To get pods:

`kubectl get pods`

## To enter pod

`kubectl exec -ti hello-world -- bash`

## To update pod just use `kubectl apply -f service/hello-world.yaml` again

### You can also attach to the pod using

`kubectl attach pods/hello-world`
