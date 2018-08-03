# Final Architecture

## Prerequisites

wiremock

### node
### express
c

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
java -jar /path/to/wiremock-standalone-2.18.0.jar --port c
```

### Test

```
curl -X POST --data '{}' http://localhost:9001/payment/api/process
```


## Backend

### Run

### Test

```
curl  http://localhost:3000
curl  http://localhost:3000/payment
```

