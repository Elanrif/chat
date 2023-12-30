package com.manar.elanrif.chat_spring.controllers;

import com.manar.elanrif.chat_spring.entities.Message;
import com.manar.elanrif.chat_spring.repositories.MessageRepository;
import com.manar.elanrif.chat_spring.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/messages")
public class MessageController {

    @Autowired
    private MessageRepository messageRepository ;

    @Autowired
    private MessageService messageService ;

    @PostMapping
    public Message sendMessage(@RequestParam String content,@RequestParam Long sender_id,@RequestParam Long receiver_id) {

        Message message = new Message() ;
        message.setContent(content);

        return messageService.sendMessage(message,sender_id,receiver_id);
    }

    @PutMapping
    public Message updateMessage(@RequestBody Message message) {
        return messageService.updateMessage(message);
    }

    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable Long id) {

        messageService.deleteMessage(id);
    }

    @GetMapping("/content")
    List<Message> getAll(@RequestParam String content){

       return messageRepository.findByContentContaining(content);
    }

    @GetMapping
    List<Message> getMessage(@RequestParam Long sender,@RequestParam Long receiver ){

        return messageRepository.findBySenderIdAndReceiverId(sender,receiver);
    }
}
