package at.fhjoanneum.ippr.processstore.services;

import at.fhjoanneum.ippr.commons.dto.processstore.ProcessOrgaMappingDTO;
import org.springframework.stereotype.Service;

import java.util.concurrent.Future;

public interface ProcessOrgaMappingService {

    Future<Iterable<ProcessOrgaMappingDTO>> findAll();

    void saveMapping(String orgaId, String userId, String processId);
}
