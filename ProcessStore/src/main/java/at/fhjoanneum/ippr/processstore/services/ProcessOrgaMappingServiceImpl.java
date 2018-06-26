package at.fhjoanneum.ippr.processstore.services;

import at.fhjoanneum.ippr.commons.dto.processstore.ProcessOrgaMappingDTO;
import at.fhjoanneum.ippr.processstore.persistence.entities.ProcessOrgaMappingObjectImpl;
import at.fhjoanneum.ippr.processstore.persistence.entities.ProcessRatingObjectImpl;
import at.fhjoanneum.ippr.processstore.repositories.ProcessOrgaMapping;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.concurrent.Future;

@Transactional
@Service
public class ProcessOrgaMappingServiceImpl implements ProcessOrgaMappingService {

    private static final Logger LOG = LoggerFactory.getLogger(ProcessOrgaMappingService.class);

    @Autowired
    ProcessOrgaMapping processOrgaMapping;

    @Override
    public Future<Iterable<ProcessOrgaMappingDTO>> findAll() {
        return null;
    }


    @Override
    public void saveMapping(String orgaId, String userId, String processId) {

        ProcessOrgaMappingObjectImpl newMapping = new ProcessOrgaMappingObjectImpl(orgaId, userId, processId);

        processOrgaMapping.save(newMapping);

    }
}
