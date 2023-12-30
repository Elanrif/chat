package com.manar.elanrif.chat_spring.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@DynamicUpdate
@Entity
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String content;
    @CreatedDate
    private LocalDateTime createdAt;
    @LastModifiedDate
    private LocalDateTime updatedAt;

    @ManyToOne(
            cascade = {
                    CascadeType.MERGE,
                    CascadeType.PERSIST
            }
    )
    private Person sender ;

    @ManyToOne(
            cascade = {
                    CascadeType.MERGE,
                    CascadeType.PERSIST
            }
    )
    private Person receiver ;
}
