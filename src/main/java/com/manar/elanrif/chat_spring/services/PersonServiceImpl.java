package com.manar.elanrif.chat_spring.services;

import com.manar.elanrif.chat_spring.entities.Person;
import com.manar.elanrif.chat_spring.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonServiceImpl implements PersonService{

    @Autowired
    private PersonRepository personRepository ;
    @Override
    public Person register(Person person) {
        return personRepository.save(person);
    }

    @Override
    public Person login(Person person) {

        Person pers = personRepository.findByEmailAndPassword(person.getEmail(),person.getPassword());
        if(pers != null ){

            pers.setIsConnected(true);

            return personRepository.save(pers) ;
        }
        return null;
    }

    @Override
    public List<Person> getAllPersonnes() {
        return personRepository.findAll();
    }

    @Override
    public void logout(Person person) {

        Person pers = personRepository.findById(person.getId()).orElse(null);

        if(pers != null && pers.getIsConnected() == true ){

            pers.setIsConnected(false);

            personRepository.save(pers);
        }

    }

    @Override
    public Person updatePerson(Person person) {
        return personRepository.save(person);
    }
}
