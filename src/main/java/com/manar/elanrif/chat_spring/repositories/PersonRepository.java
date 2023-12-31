package com.manar.elanrif.chat_spring.repositories;

import com.manar.elanrif.chat_spring.entities.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<Person,Long> {
    Person findByEmailAndPassword(String email,String password);
}
