package at.fhjoanneum.ippr.gateway.api.controller;

import at.fhjoanneum.ippr.commons.dto.processstore.ProcessStoreDTO;
import at.fhjoanneum.ippr.gateway.api.controller.user.HttpHeaderUser;
import at.fhjoanneum.ippr.gateway.api.services.impl.ProcessStoreCallerImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.net.URISyntaxException;
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

    @RequestMapping(value = "api/store/processes/approved", method = RequestMethod.GET)
    public @ResponseBody Callable<ResponseEntity<ProcessStoreDTO[]>> findAllApprovedProcesses(
            final HttpServletRequest request) {
        return() -> {
            return processStoreCaller.findAllApprovedProcesses().get();
        };
    }

    @RequestMapping(value = "api/store/processes/notApproved", method = RequestMethod.GET)
    public @ResponseBody Callable<ResponseEntity<ProcessStoreDTO[]>> findAllNotApprovedProcesses(
            final HttpServletRequest request) {
        return() -> {
            return processStoreCaller.findAllNotApprovedProcesses().get();
        };
    }

    @RequestMapping(value ="api/store/process/{processId}", method = RequestMethod.GET)
    public @ResponseBody Callable<ProcessStoreDTO> findProcessById(
            final HttpServletRequest request,
            @PathVariable(name = "processId") final Long processId) {
        return() -> {
            return processStoreCaller.findProcessById(processId).get();
        };
    }

    @RequestMapping(value ="api/store/process/{processId}/approve", method = RequestMethod.POST)
    public void approveProcessById(@PathVariable(name = "processId") final Long processId) {
        final Runnable runnable = () -> {
            try {
                processStoreCaller.approveProcessesById(processId);
            } catch (final URISyntaxException e) {
                LOG.error(e.getMessage());
            }
        };
        runnable.run();
    }

    @RequestMapping(value ="api/store/process/{processId}/unapprove", method = RequestMethod.POST)
    public void unapproveProcessById(@PathVariable(name = "processId") final Long processId) {
        final Runnable runnable = () -> {
            try {
                processStoreCaller.unapproveProcessesById(processId);
            } catch (final URISyntaxException e) {
                LOG.error(e.getMessage());
            }
        };
        runnable.run();
    }

    @RequestMapping(value ="api/store/processes/byUser/{userId}", method = RequestMethod.GET)
    public @ResponseBody Callable<ResponseEntity<ProcessStoreDTO[]>> findProcessByUserId(
            final HttpServletRequest request,
            @PathVariable(name = "userId") final Long userId) {
        return() -> {
            final HttpHeaderUser headerUser = new HttpHeaderUser(request);
            return processStoreCaller.findAllProcessesByUserId(headerUser, userId).get();
        };
    }

    /*@RequestMapping(value ="api/store/process/upload", method = RequestMethod.POST)
    @ResponseBody
    public void uploadProcess(
            final HttpServletRequest request,
            @RequestParam() processCreator
            ){
        return() -> {
            final HttpHeaderUser headerUser = new HttpHeaderUser(request);
            return processStoreCaller.uploadProcess().get();
        };
    }*/
}
