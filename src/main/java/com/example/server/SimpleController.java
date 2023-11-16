package com.example.server;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(originPatterns = {"http://localhost", "http://localhost:*"})
@RequestMapping("/api")
public class SimpleController {

   @GetMapping("/hello")
    public String sayHello() {
        return "Hello, Spring Boot!";
    }
}