package at.fhjoanneum.ippr.processstore.controller;

import at.fhjoanneum.ippr.commons.dto.processstore.ProcessStoreDTO;
import at.fhjoanneum.ippr.processstore.services.ProcessStoreService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.concurrent.Callable;

@RestController
@RequestMapping(produces = "application/json; charset=UTF-8")
public class ProcessStoreController {

    private static final Logger LOG = LoggerFactory.getLogger(ProcessStoreController.class);

    @Autowired
    private ProcessStoreService processStoreService;

    @RequestMapping(value = "processes", method = RequestMethod.GET)
    public @ResponseBody Callable<List<ProcessStoreDTO>> getAllProcesses(final HttpServletRequest request) {
        return() -> processStoreService.findAllProcesses().get();
    }
}
