package com.manar.elanrif.chat_spring.services;

import com.manar.elanrif.chat_spring.entities.Person;

import java.util.List;

public interface PersonService {

    public Person register(Person person) ;
    public Person login(Person person);
    public List<Person> getAllPersonnes();
    public void logout(Person person);

    public Person updatePerson(Person person);

}
