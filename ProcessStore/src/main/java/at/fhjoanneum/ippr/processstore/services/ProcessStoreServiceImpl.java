package at.fhjoanneum.ippr.processstore.services;

import at.fhjoanneum.ippr.commons.dto.processstore.ProcessStoreDTO;
import at.fhjoanneum.ippr.processstore.persistence.entities.ProcessStoreObjectImpl;
import at.fhjoanneum.ippr.processstore.persistence.objects.ProcessStoreObject;
import at.fhjoanneum.ippr.processstore.repositories.ProcessStore;
import com.google.common.collect.Lists;
import org.apache.jena.base.Sys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.AsyncResult;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.file.Files;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.Future;

@Transactional
@Service
public class ProcessStoreServiceImpl implements ProcessStoreService {

    private static final Logger LOG = LoggerFactory.getLogger(ProcessStoreServiceImpl.class);

    @Autowired
    private ProcessStore processStore;

    @Override
    @Async
    public Future<List<ProcessStoreDTO>> findAllProcesses() {
        final List<ProcessStoreObjectImpl> results = processStore.findAllProcesses();

        final List<ProcessStoreDTO> processes = createProcessStoreDTOList(results);

        return new AsyncResult<>(processes);
    }

    @Override
    @Async
    public Future<ProcessStoreDTO> findProcessById(Long processId) {
        final ProcessStoreObjectImpl result = processStore.findProcessById(processId);

        final ProcessStoreDTO process = createProcessStoreDTO(result);

        return new AsyncResult<ProcessStoreDTO>(process);
    }

    @Override
    public Future<List<ProcessStoreDTO>> findAllApprovedProcesses() {
        final List<ProcessStoreObjectImpl> results = processStore.findAllProcesses(true);

        final List<ProcessStoreDTO> processes = createProcessStoreDTOList(results);

        return new AsyncResult<List<ProcessStoreDTO>>(processes);
    }

    @Override
    public Future<List<ProcessStoreDTO>> findAllNotApprovedProcesses() {
        final List<ProcessStoreObjectImpl> results = processStore.findAllProcesses(false);

        final List<ProcessStoreDTO> processes = createProcessStoreDTOList(results);

        return new AsyncResult<List<ProcessStoreDTO>>(processes);
    }

    @Override
    public Future<ProcessStoreDTO> changeApprovedState(boolean isApproved, Long processId) {
        processStore.changeApprovedState(isApproved, processId);

        final ProcessStoreObjectImpl result = processStore.findProcessById(processId);

        final ProcessStoreDTO process = createProcessStoreDTO(result);

        return new AsyncResult<>(process);
    }

    @Override
    public Future<ProcessStoreDTO> updateApprovedComment(String approverComment, Long processId) {
        processStore.updateApprovedComment(approverComment, processId);

        final ProcessStoreObjectImpl result = processStore.findProcessById(processId);

        final ProcessStoreDTO process = createProcessStoreDTO(result);

        return new AsyncResult<>(process);
    }

    @Override
    public Future<List<ProcessStoreDTO>> findAllProcessesByUserId(String userId) {
        final List<ProcessStoreObjectImpl> results = processStore.findAllProcessesByUserId(userId);

        final List<ProcessStoreDTO> processes = createProcessStoreDTOList(results);

        return new AsyncResult<>(processes);
    }

    @Override
    public Future<List<ProcessStoreDTO>> findAllProcessesByOrgaId(String orgaId) {

        final List<ProcessStoreObjectImpl> results = processStore.findAllProcessesByOrgaId(orgaId);

        final List<ProcessStoreDTO> processes = createProcessStoreDTOList(results);

        return new AsyncResult<>(processes);

    }

    @Override
    public void saveProcessStoreObject(String processName, String processDescription,
                                                            String processCreator, Date processCreatedAt,
                                                            Long processVersion, Double processPrice) {

        ProcessStoreObjectImpl processStoreObject = new ProcessStoreObjectImpl();
        processStoreObject.setProcessName(processName);
        processStoreObject.setProcessDescription(processDescription);
        processStoreObject.setProcessCreator(processCreator);
        processStoreObject.setProcessCreatedAt(processCreatedAt);
        processStoreObject.setProcessVersion(processVersion);
        processStoreObject.setProcessPrice(processPrice);
        processStoreObject.setApproved(false);
        processStoreObject.setProcessApprovedDate(null);
        processStoreObject.setProcessApprover(null);
        processStoreObject.setProcessApproverComment(null);

        processStore.save(processStoreObject);
    }

    private static ProcessStoreDTO createProcessStoreDTO(final ProcessStoreObjectImpl processStoreObject) {
        LOG.debug("***************************");
        LOG.debug(String.valueOf(processStoreObject.isApproved()));
        return new ProcessStoreDTO(processStoreObject.getStoreId(), processStoreObject.getProcessName(),
                processStoreObject.getProcessDescription(), processStoreObject.getProcessCreator(),
                processStoreObject.getProcessCreatedAt(), processStoreObject.getProcessVersion(),
                processStoreObject.getProcessPrice(), processStoreObject.getProcessApprover(),
                processStoreObject.getProcessApproverComment(), processStoreObject.isApproved(),
                processStoreObject.getProcessApprovedDate());
    }

    private static List<ProcessStoreDTO> createProcessStoreDTOList(final List<ProcessStoreObjectImpl> results) {
        final List<ProcessStoreDTO> processes = Lists.newArrayList();

        for(ProcessStoreObjectImpl processStoreObject : results) {
            final ProcessStoreDTO dto = createProcessStoreDTO(processStoreObject);
            processes.add(dto);
        }
        return processes;
    }

    @Override
    public void saveProcessFile(final byte[] processFile, final Long processId) {
        ProcessStoreObjectImpl process = processStore.findProcessById(processId);

        if(process != null) {
            process.setProcessFile(processFile);
            //Increment version
            Long incrementedVersion = process.getProcessVersion() + 1;
            process.setProcessVersion(incrementedVersion);
            processStore.save(process);
        }

    }

    @Override
    public Future<Resource> getProcessFile(final Long processId) {
        ProcessStoreObjectImpl process = processStore.findProcessById(processId);

        if (process != null) {
            ByteArrayResource fileResource = new ByteArrayResource(process.getProcessFile());
            return new AsyncResult<>(fileResource);
        } else {
            return null;
        }
    }
}
