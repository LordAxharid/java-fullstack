package com.example.backendjava.repository;

import com.example.backendjava.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // Aquí puedes agregar consultas personalizadas si es necesario
}
