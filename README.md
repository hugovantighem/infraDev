# Final Architecture

## Prerequisites

wiremock

node
express

# Architecture schema


## Backend mock

### Run

```
cd mockBackend
java -jar /path/to/wiremock-standalone-2.18.0.jar --port 9080
```

### Test

```
curl http://localhost:9080/api/item/1
curl -X POST --data '{}' http://localhost:9080/api/item
```

## External service mock

### Run

```
cd mockService
java -jar /path/to/wiremock-standalone-2.18.0.jar --port 9001
```

### Test

```
curl -X POST --data '{}' http://localhost:9001/payment/api/process
```


## Backend

### Run

```
node index.js
```

### Test

```
curl  http://localhost:3000
curl  http://localhost:3000/payment
```

## With https

### Run

Self signed certificate for https

```
openssl req -x509 -sha256 -newkey rsa:2048 -keyout certificate.key -out certificate.crt -days 1024 -nodes -subj '/CN=my.cn'
openssl s_client -showcerts -servername server -connect 192.168.99.100:8443 > cacert.pem
```

### Test

```
curl --cacert cacert.pem https://192.168.99.100:8443/api/item/1
```

## Dockerized environment

```
docker-compose up
curl --data {} http://192.168.99.100:8080/payment/api/process
```

