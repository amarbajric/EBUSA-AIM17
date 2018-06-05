package at.fhjoanneum.ippr.processstore.services;

import at.fhjoanneum.ippr.commons.dto.processstore.ProcessStoreDTO;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.Future;

public interface ProcessStoreService {

    Future<List<ProcessStoreDTO>> findAllProcesses();

    Optional<ProcessStoreDTO> saveProcessStoreObject(String processName);
}
