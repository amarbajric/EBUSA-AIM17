package at.fhjoanneum.ippr.gateway.api.services.impl;


import at.fhjoanneum.ippr.commons.dto.processstore.ProcessAvgRatingDTO;

import at.fhjoanneum.ippr.commons.dto.processstore.ProcessOrgaMappingDTO;
import at.fhjoanneum.ippr.commons.dto.processstore.ProcessRatingDTO;
import at.fhjoanneum.ippr.commons.dto.processstore.ProcessStoreDTO;
import at.fhjoanneum.ippr.gateway.api.config.GatewayConfig;
import at.fhjoanneum.ippr.gateway.api.controller.user.HttpHeaderUser;
import at.fhjoanneum.ippr.gateway.api.services.Caller;
import at.fhjoanneum.ippr.gateway.security.repositories.RBACRepository;
import org.apache.http.client.utils.URIBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.util.concurrent.ListenableFuture;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.net.URISyntaxException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Future;

@Service
@Scope(proxyMode = ScopedProxyMode.TARGET_CLASS)
public class ProcessStoreCallerImpl implements Caller {

    private static final Logger LOG = LoggerFactory.getLogger(ProcessEngineCallerImpl.class);

    @Autowired
    private GatewayConfig gatewayConfig;

    @Autowired
    private RBACRepository userGroupRepository;

    @Async
    public Future<ResponseEntity<ProcessStoreDTO[]>> findAllProcesses() throws URISyntaxException {
        final URIBuilder uri = new URIBuilder(gatewayConfig.getProcessStoreAddress()).setPath("/processes");
        return createRequest(uri, HttpMethod.GET, null, ProcessStoreDTO[].class, null);
    }

    @Async
    public Future<ResponseEntity<ProcessStoreDTO[]>> findAllApprovedProcesses() throws URISyntaxException {
        final URIBuilder uri = new URIBuilder(gatewayConfig.getProcessStoreAddress()).setPath("/processes/approved");
        return createRequest(uri, HttpMethod.GET, null, ProcessStoreDTO[].class, null);
    }

    @Async
    public Future<ResponseEntity<ProcessStoreDTO[]>> findAllNotApprovedProcesses() throws URISyntaxException {
        final URIBuilder uri = new URIBuilder(gatewayConfig.getProcessStoreAddress()).setPath("/processes/notApproved");
        return createRequest(uri, HttpMethod.GET, null, ProcessStoreDTO[].class, null);
    }

    @Async
    public Future<ProcessStoreDTO> findProcessById(Long processId) throws URISyntaxException {
        final CompletableFuture<ProcessStoreDTO> future = new CompletableFuture<>();
        final URIBuilder uri = new URIBuilder(gatewayConfig.getProcessStoreAddress()).setPath("/process/"+processId);

        final ListenableFuture<ResponseEntity<ProcessStoreDTO>> responseFuture =
                createRequest(uri, HttpMethod.GET, null, ProcessStoreDTO.class, null);

        responseFuture.addCallback(result -> {
            future.complete(result.getBody());
        }, error -> {
            future.completeExceptionally(error);
        });

        return future;
    }

    @Async
    public void approveProcessesById(Long processId) throws URISyntaxException {
        final URIBuilder uri = new URIBuilder(gatewayConfig.getProcessStoreAddress()).setPath("/process/"+processId+"/approve");
        createRequest(uri, HttpMethod.POST, null, ProcessStoreDTO.class, null);
    }

    @Async
    public void unapproveProcessesById(Long processId) throws URISyntaxException {
        final URIBuilder uri = new URIBuilder(gatewayConfig.getProcessStoreAddress()).setPath("/process/"+processId+"/unapprove");
        createRequest(uri, HttpMethod.POST, null, ProcessStoreDTO.class, null);
    }

    @Async
    public void updateApprovalComment(String comment, Long processId) throws URISyntaxException {
        final URIBuilder uri = new URIBuilder(gatewayConfig.getProcessStoreAddress()).setPath("/process/"+processId+"/updateApprovalComment");
        createRequest(uri, HttpMethod.POST, comment, ProcessStoreDTO.class, null);
    }

    @Async
    public Future<ResponseEntity<ProcessStoreDTO[]>> findAllProcessesByUserId(
            final HttpHeaderUser headerUser, final Long userId
            ) throws URISyntaxException {

        final URIBuilder uri = new URIBuilder(gatewayConfig.getProcessStoreAddress()).setPath("/processes/byUser/"+userId);
        final HttpHeaders header = headerUser.getHttpHeaders();
        return createRequest(uri, HttpMethod.GET, null, ProcessStoreDTO[].class, header);

    }

    @Async
    public Future<ResponseEntity<ProcessRatingDTO[]>> findRatingByProcessId(
            final Long processId
    ) throws URISyntaxException {

        final URIBuilder uri = new URIBuilder(gatewayConfig.getProcessStoreAddress()).setPath("/processRating/"+processId);
        return createRequest(uri, HttpMethod.GET, null, ProcessRatingDTO[].class, null);

    }

    @Async
    public Future<ResponseEntity<ProcessAvgRatingDTO>> getAvgRatingAndCountOfProcess(final Long processId) throws URISyntaxException {
        final URIBuilder uri = new URIBuilder(gatewayConfig.getProcessStoreAddress()).setPath("/processRating/"+processId+"/getAverageAndCount");
        return createRequest(uri, HttpMethod.GET, null, ProcessAvgRatingDTO.class, null);
    }

    @Async
    public void saveRating(ProcessRatingDTO rating, Long processId) throws URISyntaxException {
        final URIBuilder uri = new URIBuilder(gatewayConfig.getProcessStoreAddress()).setPath("/processRating/"+processId+"/add");
        createRequest(uri, HttpMethod.POST, rating, ProcessRatingDTO.class, null);
    }

    @Async
    public void saveMapping(ProcessOrgaMappingDTO mapping, Long processId) throws URISyntaxException {
        final URIBuilder uri = new URIBuilder(gatewayConfig.getProcessStoreAddress()).setPath("/process/"+processId+"/buy");

        createRequest(uri, HttpMethod.POST, mapping, ProcessOrgaMappingDTO.class, null);
    }

    @Async

    public Future<ResponseEntity<ProcessStoreDTO>> createProcess(ProcessStoreDTO process, HttpHeaders headers) throws URISyntaxException {
        final URIBuilder uri = new URIBuilder(gatewayConfig.getProcessStoreAddress()).setPath("/process/create");
        return createRequest(uri, HttpMethod.POST, process, ProcessStoreDTO.class, headers);

    }

    @Async

    public Future<ResponseEntity<ProcessStoreDTO[]>> findAllProcessesByOrgaId(final Long orgaId
    ) throws URISyntaxException {

        final URIBuilder uri = new URIBuilder(gatewayConfig.getProcessStoreAddress()).setPath("/processes/byOrga/"+orgaId);
        //final HttpHeaders header = headerUser.getHttpHeaders();
        return createRequest(uri, HttpMethod.GET, null, ProcessStoreDTO[].class, null);

    }

    @Async
    public Future<ResponseEntity<ProcessStoreDTO[]>> uploadProcess(
            final HttpHeaderUser headerUser, final Long userId
    ) throws URISyntaxException {

        final URIBuilder uri = new URIBuilder(gatewayConfig.getProcessStoreAddress()).setPath("/process/upload");
        final HttpHeaders header = headerUser.getHttpHeaders();

        return createRequest(uri, HttpMethod.GET, null, ProcessStoreDTO[].class, header);

    }

    @Async
    public void saveProcessFile(File processFile, Long processId) throws URISyntaxException {
        final URIBuilder uri = new URIBuilder(gatewayConfig.getProcessStoreAddress()).setPath("/process/" + processId + "/uploadProcessFile");
        createRequest(uri, HttpMethod.POST, processFile, null, null);
    }

    @Async
    public Future<ResponseEntity<Resource>> getProcessFile(Long processId) throws URISyntaxException {
        final URIBuilder uri = new URIBuilder(gatewayConfig.getProcessStoreAddress()).setPath("/process/" + processId + "/getProcessFile");
        return createRequest(uri, HttpMethod.GET, null, Resource.class, null);
    }
}
