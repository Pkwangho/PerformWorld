package com.performworld.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "faq")
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FAQ extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "faq_id")
    private Long faqId;

    @Column(name = "question", nullable = false)
    private String question;  // 질문

    @Column(name = "answer", columnDefinition = "TEXT", nullable = false)
    private String answer;  // 답변

    public void updateFAQ(String question, String answer) {
        this.question = question;
        this.answer = answer;
    }
}
