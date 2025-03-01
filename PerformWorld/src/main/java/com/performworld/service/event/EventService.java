package com.performworld.service.event;

import com.performworld.dto.event.EventDTO;
import com.performworld.dto.event.EventSavedListDTO;
import com.performworld.dto.event.EventSearchListDTO;
import org.springframework.data.domain.Page;

import java.util.List;

public interface EventService {

    EventSearchListDTO getPerformances(String stdate, String eddate, String shprfnm, String signgucode, String genreSelect, int Page, int Size);
    String getEventDetails(String eventID);
    void saveEvent(String eventXml);
    List<EventDTO> getAllEvents();
    void deleteEvents(List<Long> eventId);
    EventDTO getOneEvents(Long eventId);
    List<String> getDtlImages(Long eventId);
    List<EventDTO> getEventList (String genre);
    List<EventSavedListDTO> getSavedEventList(String title, String genre);
}
