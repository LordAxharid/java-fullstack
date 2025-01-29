Proyecto Full Stack: Java + Node.js + Express + Angular + PostgreSQL
Este proyecto es una aplicación full stack que consta de:

- Backend en Java (CRUD completo con Spring Boot y PostgreSQL).
- Microservicio en Node.js + Express (conexión a la base de datos y API).
- Frontend en Angular (interfaz con Bootstrap para consumir la API).
- Base de datos PostgreSQL (almacena los datos de los usuarios).

       proyecto-fullstack/
    
      │── backend-java/          # CRUD en Java con Spring Boot
    
      │── microservicio-node/    # API en Node.js + Express
    
      │── frontend-angular/      # Interfaz en Angular con Bootstrap
    
      │── README.md              # Documentación

Configuración de la Base de Datos
  1. Iniciar PostgreSQL y conectarse a la consola (psql).
  2. Ejecutar los siguientes comandos para crear la base de datos y la tabla:

    CREATE DATABASE users_db;
    \c users_db;
    
    CREATE TABLE usuarios (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100),
        correo VARCHAR(100),
        edad INT
    );
    
    INSERT INTO usuarios (nombre, correo, edad) VALUES
    ('Juan Pérez', 'juan@example.com', 25),
    ('María López', 'maria@example.com', 30);

  3. Configurar credenciales en application.properties (Java Backend):
     
    spring.datasource.url=jdbc:postgresql://localhost:5432/users_db
    spring.datasource.username=tu_usuario
    spring.datasource.password=tu_contraseña
    spring.jpa.hibernate.ddl-auto=update

Backend en Java (Spring Boot)
📌 Instalación y Ejecución
  1. Clonar el repositorio y acceder al backend:

    git clone https://github.com/LordAxharid/full-stack-java.git
    cd backend-java
    
  2. Compilar y ejecutar el backend con Maven:

    mvn clean install
    mvn spring-boot:run
    
  3. Verificar la Ruta:
    Base URL: http://localhost:8080/admin/users

🌎 Microservicio en Node.js + Express
📌 Instalación y Ejecución

  1. Acceder al directorio del microservicio:

    cd microservicio-node
    
  2. Instalar dependencias y ejecutar el servidor:

    npm install
    node server.js
  3. Verificar la API REST:
    Base URL: http://localhost:3000/api/data
    Devuelve la lista de usuarios en formato JSON.

🎨 Frontend en Angular (Bootstrap)
📌 Instalación y Ejecución

  1. Acceder al directorio del frontend:

    cd frontend-angular
    
  2. Instalar dependencias y ejecutar Angular:
     
    npm install
    ng serve --open
  La aplicación estará disponible en: http://localhost:4200

  Desarrollado por: John jairo medina
  Contacto: jhonjairomedina11@gmail.com
