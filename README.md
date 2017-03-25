# AngularSpringApp1
Live Demo [AngularSpringApp1](https://angular-spring-app-1.herokuapp.com/).

## Description
1. It is website developed on restful architecture.
2. It authenticates users and controls there access rights.
3. System has two Roles(ROLE_USER, ROLE_ADMIN).
4. Each User has one of these roles
5. Each Role have its own privileges in the system.
6. Access to the granted resources is restricted on both ends (frontend, backend).

## Technologies Used

1. [SpringBoot](): A Java based MVC Framework
2. [Spring Security](): A security mechanism for Spring Framework
3. [JWT Security](): A library for stateless user authentication
4. [Spring Data JPA](): A database handling library for Spring Framework
5. [AngularJs](): A frontend framework for restful services

A lot of other plugins and libraries are used for the flexibility and quality.

## Instructions For Users

1. By default two users exists in the system.
2. One has administrative rights. Its login UserName and Password are [admin, admin]
3. Second has administrative rights. Its login UserName and Password are [user, user]
4. There are two entities in the system. [Customer, Address]
5. There is one to many relation between Customers to Addresses.
6. Admin can perform CRUD operations on Customers and Adddesses.
7. User can perform CRUD operations on only customers.
8. Admin or user can view, update or delete just own added entities.
