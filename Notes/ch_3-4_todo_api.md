### Chapter 3

# Todo API

## Concept

Building a web-app with a front-end (React) and back-end (Django). 

## Structure

- todo directory
    - frontend
        - {react code}
    - backend
        - {django code}
        
## Building the Back-end

The book approach/ work-flow is slightly unintuitive.

Here are the components needed to set up an API, in order:
1. Initial Set-Up (with DRF)
1. Instantiate App
1. Add application to Installed Apps
1. Adjust Project routing to App
1. Instantiate Model(s)
1. Instantiate Serializer file
1. Implement View(s)
1. Instantiate App Routing

## Using CORS

Cross-Origin Resource Sharing makes the server require HTTP headers that allow for cross-domain requests

We will need to add the package ( django-cors-headers) to the Installed Apps, Middleware, and create a
 CORS_ORIGIN_WHITELIST setting
 
 