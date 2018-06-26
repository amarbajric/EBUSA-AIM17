package at.fhjoanneum.ippr.processstore.controller;

import at.fhjoanneum.ippr.commons.dto.processstore.ProcessRatingDTO;
import at.fhjoanneum.ippr.commons.dto.processstore.ProcessStoreDTO;
import at.fhjoanneum.ippr.processstore.persistence.entities.ProcessRatingObjectImpl;
import at.fhjoanneum.ippr.processstore.persistence.entities.ProcessStoreObjectImpl;
import at.fhjoanneum.ippr.processstore.services.ProcessRatingService;
import at.fhjoanneum.ippr.processstore.services.ProcessStoreService;
import com.google.common.util.concurrent.AtomicDouble;
import org.apache.jena.atlas.iterator.Iter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.Serializable;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.atomic.AtomicInteger;

@RestController
@RequestMapping(produces = "application/json; charset=UTF-8")
public class ProcessRatingController {

    private static final Logger LOG = LoggerFactory.getLogger(ProcessRatingController.class);

    @Autowired
    private ProcessRatingService processRatingService;

    @Autowired
    private ProcessStoreService processStoreService;

    @RequestMapping(value = "processRating", method = RequestMethod.GET)
    public @ResponseBody
    Callable<Iterable<ProcessRatingDTO>> getAllRatings(final HttpServletRequest request) {
        return() -> processRatingService.findAll().get();
    }

    @RequestMapping(value = "processRating/{processId}", method = RequestMethod.GET)
    public @ResponseBody Callable<Iterable<ProcessRatingDTO>> getRatingByProcessId(
            final HttpServletRequest request, @PathVariable("processId") final Long processId) {
        return() -> processRatingService.findAllRatingsByProcessId(processId).get();
    }

    @RequestMapping(value = "processRating/{processId}/getAverageAndCount", method = RequestMethod.GET)
    public @ResponseBody Callable<ResponseEntity<AvgRatingResponse>> getAverageAndCount(@PathVariable("processId") final Long processId)
            throws ExecutionException, InterruptedException {

        AtomicInteger numberOfRatings = new AtomicInteger(0);
        AtomicDouble averageRating = new AtomicDouble(0.0);
        Iterable<ProcessRatingDTO> allProcesses = processRatingService.findAllRatingsByProcessId(processId).get();
        allProcesses.forEach(rating -> {
            numberOfRatings.set(numberOfRatings.intValue() + 1);
            averageRating.set(averageRating.doubleValue() + rating.getRating());
        });

        averageRating.set((averageRating.doubleValue()/numberOfRatings.doubleValue()));


        return() -> new ResponseEntity<>(new AvgRatingResponse(numberOfRatings.intValue(), averageRating.doubleValue()), HttpStatus.OK);
    }

    @RequestMapping(value = "processRating/{processId}/add", method = RequestMethod.POST)
    public @ResponseBody
    ResponseEntity<RatingResponse> saveRating(@RequestBody final ProcessRatingDTO rating, @PathVariable("processId") final Integer processId) {


        processRatingService.saveRating(rating.getRating(),rating.getRatingComment(), rating.getCreatedBy(),rating.getCreatedAt(), processId);

        return new ResponseEntity<>(new RatingResponse("Ok"), HttpStatus.OK);
    }

    private static class RatingResponse implements Serializable {
        private static final long serialVersionUID = -431110191246364495L;

        public final String message;

        public RatingResponse(final String message) { this.message = message; }
    }

    private static class AvgRatingResponse implements Serializable {
        private static final long serialVersionUID = -439810191246364495L;

        public final Integer numberOfRatings;
        public final Double averageRating;

        public AvgRatingResponse(final Integer numberOfRatings, final Double averageRating) {
            this.numberOfRatings = numberOfRatings;
            this.averageRating = averageRating;
        }
    }
}
