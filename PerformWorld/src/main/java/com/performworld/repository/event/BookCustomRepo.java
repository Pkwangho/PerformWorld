package com.performworld.repository.event;

import com.performworld.dto.ticket.TicketingDTO;

import java.util.List;

public interface BookCustomRepo {

    List<TicketingDTO> getEventTicketing(Long eventId);

}
