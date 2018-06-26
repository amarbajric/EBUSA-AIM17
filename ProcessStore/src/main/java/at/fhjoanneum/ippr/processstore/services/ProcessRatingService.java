package at.fhjoanneum.ippr.processstore.services;

import at.fhjoanneum.ippr.commons.dto.processstore.ProcessRatingDTO;

import java.util.Date;
import java.util.concurrent.Future;

public interface ProcessRatingService {


    Future<Iterable<ProcessRatingDTO>> findAll();

    Future<Iterable<ProcessRatingDTO>> findAllRatingsByProcessId(Long processId);

    void saveRating(Integer rating, String ratingComment, String createdBy, Date createdAt, Integer processId);

}
