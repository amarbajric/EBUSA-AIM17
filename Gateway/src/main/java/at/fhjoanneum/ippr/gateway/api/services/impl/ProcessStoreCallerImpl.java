package at.fhjoanneum.ippr.gateway.api.services.impl;

import at.fhjoanneum.ippr.commons.dto.processstore.ProcessStoreDTO;
import at.fhjoanneum.ippr.gateway.api.config.GatewayConfig;
import at.fhjoanneum.ippr.gateway.api.services.Caller;
import at.fhjoanneum.ippr.gateway.security.repositories.RBACRepository;
import org.apache.http.client.utils.URIBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.net.URISyntaxException;
import java.util.BitSet;
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
}
