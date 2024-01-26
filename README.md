# Optimising http server

- an HTTP server in a nodeJs.
- The server will respond to incoming GET requests on the endpoint /data.
- You must accept 2 query params, n: file name, and m: line number.
- If n and line both are provided, return the content of file /tmp/data/n.txt at line number m.
- If only n is provided, return the contents of file /tmp/data/n.txt entirely.  

# Assignment Overview

This assignment involves the development of an HTTP server using Node.js and Express. The server is designed to handle various requests, including fetching and serving data, as well as implementing specific functionalities. The assignment also covers the use of Docker for containerization and provides an opportunity to explore basic Git commands for version control.

## Key Components

1. **Node.js HTTP Server:**
   - Implementation of an HTTP server using Node.js and Express.
   - Handling different types of requests and responses.

2. **Docker Integration:**
   - Containerizing the Node.js application using Docker.
   - Configuring Docker settings, such as memory allocation and port mapping.

3. **Git Version Control:**
   - Creating a Git repository for version control.
   - Committing changes, creating branches, and pushing to a remote repository.

4. **Postman Testing:**
   - Demonstrating API testing using Postman for the developed server.

## Project Structure

The project consists of the following files and directories:

- `server.js`: The main Node.js server file.
- `Dockerfile`: Configuration file for Docker.
- `README.md`: Documentation file providing an overview, installation instructions, and more.


# How to Test This API

To facilitate testing of the implemented API, you can use tools like Postman to send HTTP requests and observe responses. Follow the steps below to test different endpoints and functionalities.

## Prerequisites

- [Postman](https://www.postman.com/downloads/) installed on your machine.

## Testing Endpoints

1. **GET Request - Retrieve Entire File Content:**
   - **Endpoint:** `http://localhost:8081/data`
   - **Method:** GET
   - **Parameters:**
     - `n` (File name)
   - **Example Request:**
     ```
     GET http://localhost:8081/data?n=1
     ```
   - **Expected Response:**
     - The entire content of the specified file.

2. **GET Request - Retrieve Specific Line from File:**
   - **Endpoint:** `http://localhost:8081/data`
   - **Method:** GET
   - **Parameters:**
     - `n` (File name)
     - `m` (Line number)
   - **Example Request:**
     ```
     GET http://localhost:8081/data?n=1&m=5
     ```
   - **Expected Response:**
     - The content of the specified line from the file.

3. **Error Handling - Missing File Name:**
   - **Endpoint:** `http://localhost:8081/data`
   - **Method:** GET
   - **Example Request:**
     ```
     GET http://localhost:8081/data
     ```
   - **Expected Response:**
     - Status 400 with the message "File name is required."

## Docker Testing

If you prefer to test using Docker, make sure you have the Docker

