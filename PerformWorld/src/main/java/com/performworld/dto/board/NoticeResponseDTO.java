package com.performworld.dto.board;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NoticeResponseDTO {

    private Long noticeId; // 공지사항 ID

    private String title; // 공지사항 제목

    private String content; // 공지사항 내용

    private LocalDateTime createdAt; // 생성시간

    private LocalDateTime updatedAt; // 수정시간
}

