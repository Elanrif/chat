package com.manar.elanrif.chat_spring.services;

import com.manar.elanrif.chat_spring.entities.Person;

public interface PersonService {

    public Person register(Person person) ;
    public Person login(Person person);
    public void logout(Person person);

    public Person updatePerson(Person person);

}
