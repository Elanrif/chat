package com.manar.elanrif.chat_spring.services;

import com.manar.elanrif.chat_spring.entities.Message;
import com.manar.elanrif.chat_spring.entities.Person;

public interface MessageService {

    public Message sendMessage(Message message, Long sender_id,Long receiver_id);
    public Message updateMessage(Message message);

    public void deleteMessage(Long id) ;
}
