package com.manar.elanrif.chat_spring.services;

import com.manar.elanrif.chat_spring.entities.Message;
import com.manar.elanrif.chat_spring.entities.Person;
import com.manar.elanrif.chat_spring.repositories.MessageRepository;
import com.manar.elanrif.chat_spring.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Service
public class MessageServiceImpl implements MessageService{

    @Autowired
    private PersonRepository personRepository ;
    @Autowired
    private MessageRepository messageRepository ;

    @Override
    public Message sendMessage(Message message, Long sender_id, Long receiver_id) {

        Person sender = personRepository.findById(sender_id).orElse(null) ;
        Person receiver = personRepository.findById(receiver_id).get() ;

        if(sender !=null && receiver !=null){

            message.setUpdatedAt(LocalDateTime.now());
            message.setCreatedAt(LocalDateTime.now());
            sender.addSenderMessage(message);
            receiver.addReceiverMessage(message);

            return messageRepository.save(message) ;
        }

        return null;
    }

    @Override
    public Message updateMessage(Message message) {
        Message msg = messageRepository.findById(message.getId()).orElse(null) ;

        msg.setUpdatedAt(LocalDateTime.now());
        msg.setContent(message.getContent());

        return messageRepository.save(msg);
    }

    @Override
    public void deleteMessage(Long id) {
        messageRepository.deleteById(id);
    }
}
