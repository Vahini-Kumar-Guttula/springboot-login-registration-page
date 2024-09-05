# Spring Boot Login and Registration Page

# Overview
This project is a basic Spring Boot application that demonstrates how to implement user authentication and registration functionality. It provides a simple login and registration page using Spring Boot, Spring Security, and Thymeleaf for templating. The goal of this project is to offer a foundational example of how to secure a web application and manage user credentials effectively.

# Features
**User Registration:** Allows new users to create an account with a username, password, and other details.

**User Login:** Provides a secure login page for users to authenticate with their credentials.

**Password Encoding:** Uses BCrypt to securely hash and store passwords.

**Session Management:** Manages user sessions and authentication status.

**Form Validation:** Ensures user input is valid before processing.

# Technologies Used
**Spring Boot:** The core framework for building the application.

**Spring Security:** Provides authentication and authorization capabilities.

**Thymeleaf:** A server-side Java template engine used for rendering HTML pages.

**H2 Database:** An in-memory database for storing user details (can be replaced with other databases like MySQL or PostgreSQL).

**Maven/Gradle:** For dependency management and building the project.

# Getting Started
**Prerequisites**

Java 17 or later

Maven or Gradle

An IDE such as IntelliJ IDEA or Eclipse

Installation

Clone the Repository:



**Access the Application:** Open your web browser and go to http://localhost:8080 to see the login and registration pages.

# Configuration
The application uses default settings, but you can configure the following properties in **application.properties:**

**Database Configuration:** Modify database settings if you're using a different database.

**Server Port:** Change the server port by setting server.port.

**Usage**

Register a New User: Navigate to the registration page and fill out the form with the required details.
Log In: After registration, use the login page to authenticate with your credentials.
# Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

# Contact
For any questions or support, please reach out to **vahinikumarg@gmail.com**.

