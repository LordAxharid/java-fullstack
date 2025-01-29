package com.example.backendjava;

import com.example.backendjava.model.User;
import com.example.backendjava.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        // Verifica si ya existen usuarios antes de insertarlos
        if (userRepository.count() == 0) {
            User user1 = new User("Alice", "alice@example.com", 30);
            User user2 = new User("Bob", "bob@example.com", 25);
            userRepository.save(user1);
            userRepository.save(user2);
            System.out.println("Usuarios de prueba insertados.");
        } else {
            System.out.println("Los usuarios ya existen.");
        }
    }
}

