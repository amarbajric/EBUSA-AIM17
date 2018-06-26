package at.fhjoanneum.ippr.processstore.services;

import at.fhjoanneum.ippr.commons.dto.processstore.ProcessRatingDTO;
import at.fhjoanneum.ippr.processstore.persistence.entities.ProcessRatingObjectImpl;
import at.fhjoanneum.ippr.processstore.persistence.entities.ProcessStoreObjectImpl;
import at.fhjoanneum.ippr.processstore.persistence.entities.ProcessRatingBuilder;
import at.fhjoanneum.ippr.processstore.repositories.ProcessRating;
import com.google.common.collect.Lists;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.AsyncResult;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.Future;

@Transactional
@Service
public class ProcessRatingServiceImpl implements ProcessRatingService {

    private static final Logger LOG = LoggerFactory.getLogger(ProcessRatingServiceImpl.class);

    @Autowired
    private ProcessRating processRating;

    @Override
    @Async
    public Future<Iterable<ProcessRatingDTO>> findAll() {
        final Iterable<ProcessRatingObjectImpl> results = processRating.findAll();
        LOG.debug("*******");
        LOG.debug(String.valueOf(results));
        final List<ProcessRatingDTO> processes = createProcessRatingDTOList(results);

        return new AsyncResult<>(processes);
    }

    @Override
    @Async
    public Future<Iterable<ProcessRatingDTO>> findAllRatingsByProcessId(Long processId) {
        final Iterable<ProcessRatingObjectImpl> results = processRating.findProcessRatingByProcessId(processId);
        LOG.debug("*******");
        LOG.debug(String.valueOf(results));
        final List<ProcessRatingDTO> processes = createProcessRatingDTOList(results);

        return new AsyncResult<>(processes);
    }

    @Override
    public void saveRating(Integer rating, String ratingComment, String createdBy, Date createdAt, Integer process) {
        if (StringUtils.isEmpty(ratingComment) || StringUtils.isEmpty(createdBy)) {
            LOG.info("Could not add new rating. One or more properties missing.");
            //return Optional.empty();
        }

        ProcessRatingObjectImpl newRating = new ProcessRatingObjectImpl(rating, ratingComment, createdBy, createdAt, process);

        processRating.save(newRating);
        //return (Optional) processRating.findProcessRatingByProcessId(process.getStoreId());
    }


    private static ProcessRatingDTO createProcessRatingDTO(final ProcessRatingObjectImpl processRatingObject) {
        return new ProcessRatingDTO(processRatingObject.getProcessRatingId(), processRatingObject.getRating(),
                processRatingObject.getComment(), processRatingObject.getCreatedBy(), processRatingObject.getCreatedAt(),
                processRatingObject.getProcessId());
    }

    private static List<ProcessRatingDTO> createProcessRatingDTOList(final Iterable<ProcessRatingObjectImpl> results) {
        final List<ProcessRatingDTO> processes = Lists.newArrayList();
        for(ProcessRatingObjectImpl processRatingObject : results) {
            final ProcessRatingDTO dto = createProcessRatingDTO(processRatingObject);
            processes.add(dto);
        }
        return processes;
    }
}
