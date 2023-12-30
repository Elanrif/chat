package com.manar.elanrif.chat_spring.controllers;

import com.manar.elanrif.chat_spring.entities.Person;
import com.manar.elanrif.chat_spring.repositories.PersonRepository;
import com.manar.elanrif.chat_spring.services.PersonService;
import com.manar.elanrif.chat_spring.services.PersonServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/persons")
public class PersonController {

@Autowired
private PersonService personService ;

@Autowired
private PersonRepository personRepository ;

    @PostMapping("/register")
    public Person register(@RequestBody Person person) {
        return personService.register(person);
    }

    @GetMapping("/login")
    public Person login(@RequestBody  Person person) {
        return personService.login(person);
    }

    @GetMapping("/logout")
    public void logout(@RequestBody  Person person) {
        personService.logout(person);
    }

    @PutMapping
    public Person updatePerson(@RequestBody  Person person) {
        return personService.updatePerson(person);
    }

    @PostMapping
    public List<Person> savePersons(@RequestBody List<Person> persons){

        return personRepository.saveAll(persons) ;

    }
}
