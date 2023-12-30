package com.manar.elanrif.chat_spring.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
/*@DynamicUpdate*/
@Entity
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String name ;
    private Boolean isConnected = false ;
    private String email ;
    private String password;

    @JsonIgnore
    @OneToMany(
            mappedBy = "sender",
            cascade = CascadeType.ALL
    )
    private List<Message> sender_messages;

    @JsonIgnore
    @OneToMany(mappedBy = "receiver")
    private List<Message> receiver_messages;

    public void addSenderMessage(Message message){
        sender_messages.add(message);
        message.setSender(this);
    }

    public void removeSenderMessage(Message message){
        sender_messages.remove(message);
        message.setSender(null);
    }
    public void addReceiverMessage(Message message){
        receiver_messages.add(message);
        message.setReceiver(this);
    }

    public void removeReceiverMessage(Message message){
        receiver_messages.add(message);
        message.setReceiver(null);
    }
}
