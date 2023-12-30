package com.manar.elanrif.chat_spring.repositories;

import com.manar.elanrif.chat_spring.entities.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message,Long> {

    public List<Message> findByContentContaining(String name) ;

    public List<Message> findBySenderIdAndReceiverId(Long sender,Long receiver);
}
