package at.fhjoanneum.ippr.processstore.controller;

import at.fhjoanneum.ippr.commons.dto.processstore.ProcessStoreDTO;
import at.fhjoanneum.ippr.processstore.services.ProcessStoreService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
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


    @RequestMapping(value = "processes/byUser/{userId}", method = RequestMethod.GET)
    public @ResponseBody Callable<List<ProcessStoreDTO>> getProcessByUserId(
            final HttpServletRequest request, @PathVariable("userId") final String userId) {
        return() -> processStoreService.findAllProcessesByUserId(userId).get();
    }

    @RequestMapping(value = "processes/{organisationId}", method = RequestMethod.GET)
    public @ResponseBody Callable<List<ProcessStoreDTO>> getProcessByOrganisationId(
            final HttpServletRequest request, @PathVariable("organisationId") final String organisationId) {
        return() -> processStoreService.findAllProcessesByOrganisationId(organisationId).get();
    }

    @RequestMapping(value = "processes/approved", method = RequestMethod.GET)
    public @ResponseBody Callable<List<ProcessStoreDTO>> getAllApprovedProcesses(final HttpServletRequest request) {
        return() -> processStoreService.findAllApprovedProcesses().get();
    }

    @RequestMapping(value = "processes/notApproved", method = RequestMethod.GET)
    public @ResponseBody Callable<List<ProcessStoreDTO>> getAllNotApprovedProcesses(final HttpServletRequest request) {
        return() -> processStoreService.findAllNotApprovedProcesses().get();
    }

    @PostMapping(value = "process/upload")
    @ResponseBody
    public void uploadProcess(final HttpServletRequest request, String processName, String processDescription, String processCreator,
                                                         Date processCreatedAt, Long processVersion, Double processPrice) {
        processStoreService.saveProcessStoreObject(processName, processDescription,processCreator,
                processCreatedAt,processVersion,processPrice);
    }

    @RequestMapping(value = "process/{processId}", method = RequestMethod.GET)
    public @ResponseBody Callable<ProcessStoreDTO> getProcessById(
            final HttpServletRequest request, @PathVariable("processId") final Long processId) {
        return() -> processStoreService.findProcessById(processId).get();
    }

    @RequestMapping(value = "process/{processId}/approve", method = RequestMethod.POST)
    public @ResponseBody Callable<ProcessStoreDTO> approveProcessById(
            final HttpServletRequest request, @PathVariable("processId") final Long processId) {
        return() -> processStoreService.changeApprovedState(true ,processId).get();
    }

    @RequestMapping(value = "process/{processId}/unapprove", method = RequestMethod.POST)
    public @ResponseBody Callable<ProcessStoreDTO> unapproveProcessById(
            final HttpServletRequest request, @PathVariable("processId") final Long processId) {
        return() -> processStoreService.changeApprovedState(false ,processId).get();
    }

    @RequestMapping(value = "process/{processId}/updateApprovalComment", method = RequestMethod.POST)
    public @ResponseBody Callable<ProcessStoreDTO> updateApproval(
            @RequestBody final String comment, @PathVariable("processId") final Long processId) {
        return() -> processStoreService.updateApprovedComment(comment ,processId).get();
    }

}
