package com.manar.elanrif.chat_spring.repositories;

import com.manar.elanrif.chat_spring.entities.Message;
import com.manar.elanrif.chat_spring.entities.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message,Long> {

    public List<Message> findByContentContaining(String name) ;
    @Query("SELECT m FROM Message m WHERE (m.sender = :user1 AND m.receiver = :user2) OR (m.sender = :user2 AND m.receiver = :user1) ORDER BY m.id")
    List<Message> findMessagesBetweenUsers(@Param("user1") Person user1, @Param("user2") Person user2);

    List<Message> findAllBySenderIdAndReceiverIdOrderByIdAsc(Long sender, Long receiver);
}
