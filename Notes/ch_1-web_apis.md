### Chapter 1

# Web APIs

## Web Fundamentals

Every URL has 3 potential parts:
- **Scheme** (ex. https)
- **Hostname** (ex. www.google.com)
- optional **Path** (ex. /about/)
    
**TCP**
- Transmission Control Protocol
- Provides a reliable, ordered, error-checked delivery of bytes between two applications.
- To Start a TCP connection, a 3-way handshake occurs between the client and server:
        1. Client sends a SYN asking to establish a connnection
        2. The server responses with a SYN-ACK acknowleding the request and passing a connection parameter
        3. Client sends an ACK back to the server confirming the connection
        
**HTTP**
- Based on Create-Read-Update-Delete (CRUD) functionality
- There are multiple request methods to get information from a server
- Four most common requests methods (mapped to CRUD)
    - POST (Create)
    - GET (Read)
    - PUT (Update)
    - DELETE (Delete)
- Request-Response protocol between two computers with an existing TCP connection
- HTTP messages consist of:
    - **Status Line**
    - **Headers**
    - optional **Body**
        
**Endpoints**
- Web APIs have endpoints
- Endpoints are URLs with a list of available actions (HTTP verbs) that expose data
- Endpoints generally work with JSON-format

**Statelessness**

HTTP is a **stateless** protocol. Each request/response pair is independent of the previous or next one.
State was previously maintained on the server. It is now more common for the client to manage state.

## Example HTTP Messages

**Request**
```http request
GET / HTTP/1.1
Host: google.com
Accept_Language: en-US
```
    
**Response**
```http request
HTTP/1.1 200 OK
Date: Mon, 03 Aug 2020 23:26:07 GMT
Server: gws
Accept-Ranges: bytes
Content-Length: 13
Content-Type: text/html; charset=UTF-8
Hello, world!
```

## HTTP Status Codes

- **2xx**: Success
- **3xx**: Redirection
- **4xx**: Client Error
- **5xx**: Server Error

## REpresentational State Transfer (REST)

Approach to building APIs on (top of) the web, using the HTTP protocol

**Three main REST traits**:
- Stateless
- Supports common HTTP verbs (ie GET, POST, etc)
- Returns data in XML or JSON format
