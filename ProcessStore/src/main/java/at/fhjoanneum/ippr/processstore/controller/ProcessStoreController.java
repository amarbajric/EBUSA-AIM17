package at.fhjoanneum.ippr.processstore.controller;

import at.fhjoanneum.ippr.commons.dto.processstore.ProcessOrgaMappingDTO;
import at.fhjoanneum.ippr.commons.dto.processstore.ProcessStoreDTO;
import at.fhjoanneum.ippr.processstore.services.ProcessOrgaMappingService;
import at.fhjoanneum.ippr.processstore.services.ProcessStoreService;
import org.apache.jena.atlas.logging.Log;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.Serializable;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.util.Date;
import java.util.List;
import java.util.concurrent.Callable;

@RestController
@RequestMapping(produces = "application/json; charset=UTF-8")
public class ProcessStoreController {

    private static final Logger LOG = LoggerFactory.getLogger(ProcessStoreController.class);

    @Autowired
    private ProcessStoreService processStoreService;

    @Autowired
    private ProcessOrgaMappingService processOrgaMappingService;

    @RequestMapping(value = "processes", method = RequestMethod.GET)
    public @ResponseBody Callable<List<ProcessStoreDTO>> getAllProcesses(final HttpServletRequest request) {
        return() -> processStoreService.findAllProcesses().get();
    }


    @RequestMapping(value = "processes/byUser/{userId}", method = RequestMethod.GET)
    public @ResponseBody Callable<List<ProcessStoreDTO>> getProcessByUserId(
            final HttpServletRequest request, @PathVariable("userId") final String userId) {
        return() -> processStoreService.findAllProcessesByUserId(userId).get();
    }

    @RequestMapping(value = "processes/byOrga/{organisationId}", method = RequestMethod.GET)
    public @ResponseBody Callable<List<ProcessStoreDTO>> getProcessByOrganisationId(
            final HttpServletRequest request, @PathVariable("organisationId") final String organisationId) {
        return() -> processStoreService.findAllProcessesByOrgaId(organisationId).get();
    }

    @RequestMapping(value = "processes/approved", method = RequestMethod.GET)
    public @ResponseBody Callable<List<ProcessStoreDTO>> getAllApprovedProcesses(final HttpServletRequest request) {
        return() -> processStoreService.findAllApprovedProcesses().get();
    }

    @RequestMapping(value = "processes/notApproved", method = RequestMethod.GET)
    public @ResponseBody Callable<List<ProcessStoreDTO>> getAllNotApprovedProcesses(final HttpServletRequest request) {
        return() -> processStoreService.findAllNotApprovedProcesses().get();
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

    @RequestMapping(value = "process/{processId}/uploadProcessFile", method = RequestMethod.POST)
    public void handleProcessFileUpload(@RequestBody File processFile, @PathVariable("processId") final Long processId) throws IOException {
        byte [] byteArray = Files.readAllBytes(processFile.toPath());
        //delete file to not raise error if another version is uploaded
        processFile.delete();
        processStoreService.saveProcessFile(byteArray, processId);
    }

    @RequestMapping(value = "process/{processId}/getProcessFile", method = RequestMethod.GET)
    public @ResponseBody Callable<Resource> handleProcessFileDownload(@PathVariable("processId") final Long processId) {
        return() -> processStoreService.getProcessFile(processId).get();
    }

    @RequestMapping(value = "process/{processId}/buy", method = RequestMethod.POST)
    public @ResponseBody
    ResponseEntity<ProcessStoreController.OrgaMappingResponse> saveRating(@RequestBody final ProcessOrgaMappingDTO mapping, @PathVariable("processId") final Integer processId) {

        processOrgaMappingService.saveMapping(mapping.getOrgaId(), mapping.getUserId(), String.valueOf(processId));

        return new ResponseEntity<>(new OrgaMappingResponse("Ok"), HttpStatus.OK);
    }

    @RequestMapping(value = "process/create", method = RequestMethod.POST)

    public @ResponseBody Callable<ProcessStoreDTO> saveProcess(@RequestHeader HttpHeaders headers, @RequestBody final ProcessStoreDTO process) {

        return() -> processStoreService.saveProcessStoreObject(process.getProcessName(),process.getProcessDescription(),
                process.getProcessCreator(),process.getProcessPrice()).get();

    }

    private static class OrgaMappingResponse implements Serializable {
        private static final long serialVersionUID = -431110191246364495L;

        public final String message;

        public OrgaMappingResponse(final String message) { this.message = message; }
    }
}
