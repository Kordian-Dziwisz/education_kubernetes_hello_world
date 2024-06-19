# education_kubernetes_hello_world

The simple hello_world app presenting the creation of pods in kubernetes

To build image:

`docker buildx build -t kordiandziwisz/education_kubernetes_hello_world ./docker`

To run kubernetes pod

`kubectl apply -f service/hello-world.yaml`

To get pods:

`kubectl get pods`

To enter pod

`kubectl exec -ti hello-world -- bash`

To update pod just use `kubectl apply -f service/hello-world.yaml` again

You can also attach to the pod using

`kubectl attach pods/hello-world`
