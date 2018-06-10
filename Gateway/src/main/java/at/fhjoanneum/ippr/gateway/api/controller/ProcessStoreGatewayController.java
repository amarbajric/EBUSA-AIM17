package at.fhjoanneum.ippr.gateway.api.controller;

import at.fhjoanneum.ippr.commons.dto.processstore.ProcessStoreDTO;
import at.fhjoanneum.ippr.gateway.api.services.impl.ProcessStoreCallerImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.concurrent.Callable;

@RestController
@RequestMapping(produces = "application/json; charset=UTF-8")
public class ProcessStoreGatewayController {

    private static final Logger LOG = LoggerFactory.getLogger(ProcessStoreGatewayController.class);

    @Autowired
    private ProcessStoreCallerImpl processStoreCaller;

    @RequestMapping(value = "api/store/processes", method = RequestMethod.GET)
    public @ResponseBody Callable<ResponseEntity<ProcessStoreDTO[]>> findAllProcesses(
            final HttpServletRequest request) {
        return() -> {
            return processStoreCaller.findAllProcesses().get();
        };
    }
}
