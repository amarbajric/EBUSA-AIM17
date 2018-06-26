package at.fhjoanneum.ippr.gateway.api.controller;

import at.fhjoanneum.ippr.commons.dto.processstore.ProcessOrgaMappingDTO;
import at.fhjoanneum.ippr.commons.dto.processstore.ProcessRatingDTO;
import at.fhjoanneum.ippr.commons.dto.processstore.ProcessStoreDTO;
import at.fhjoanneum.ippr.gateway.api.controller.user.HttpHeaderUser;
import at.fhjoanneum.ippr.gateway.api.services.impl.ProcessStoreCallerImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.Serializable;
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

    @RequestMapping(value ="api/store/process/{processId}/updateApprovalComment", method = RequestMethod.POST)
    public void unapproveProcessById(@RequestBody String comment, @PathVariable(name = "processId") final Long processId) {
        final Runnable runnable = () -> {
            try {
                processStoreCaller.updateApprovalComment(comment, processId);
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

    @RequestMapping(value ="api/store/processRating/{processId}", method = RequestMethod.GET)
    public @ResponseBody Callable<ResponseEntity<ProcessRatingDTO[]>> findRatingByProcessId(
            final HttpServletRequest request,
            @PathVariable(name = "processId") final Long processId) {
        return() -> processStoreCaller.findRatingByProcessId(processId).get();
    }


    @RequestMapping(value ="api/store/processRating/{processId}/add", method = RequestMethod.POST)
    public void saveRating(@RequestBody ProcessRatingDTO rating, @PathVariable(name = "processId") final Long processId) {
        final Runnable runnable = () -> {
            try {
                processStoreCaller.saveRating(rating, processId);
            } catch (final URISyntaxException e) {
                LOG.error(e.getMessage());
            }
        };
        runnable.run();
    }

    @RequestMapping(value = "api/store/process/{processId}/uploadProcessFile", method = RequestMethod.POST)
    public ResponseEntity<UploadProcessResponse> saveProcessFile(@RequestParam("file") MultipartFile processFile, @PathVariable(name = "processId") final Long processId)
            throws URISyntaxException {

            if (!processFile.isEmpty()) {
                try {
                    byte[] bytes = processFile.getBytes();

                    // Creating the directory to store file
                    String rootPath = System.getProperty("catalina.home");
                    File dir = new File(rootPath + File.separator + "tmpFiles");
                    if (!dir.exists()) dir.mkdirs();

                    // Create the file on server
                    File serverFile = new File(dir.getAbsolutePath()
                            + File.separator + ("processFileOfProcessId" + processId));

                    BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
                    stream.write(bytes);
                    stream.close();

                    processStoreCaller.saveProcessFile(serverFile, processId);
                } catch (Exception e) {
                    LOG.error("Failed to upload " + "processFileOfProcessId" + processId + " => " + e.getMessage());
                    return new ResponseEntity<>(new UploadProcessResponse("Saving Process failed", false), HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        return new ResponseEntity<>(new UploadProcessResponse("Ok", true), HttpStatus.OK);
    }

    @RequestMapping(value = "api/store/process/{processId}/getProcessFile", method = RequestMethod.GET)
    public @ResponseBody Callable<ResponseEntity<Resource>> serveProcessFile(@PathVariable(name = "processId") final Long processId) {
        return() -> processStoreCaller.getProcessFile(processId).get();
    }


    @RequestMapping(value ="api/store/process/{processId}/buy", method = RequestMethod.POST)
    public void saveRating(@RequestBody ProcessOrgaMappingDTO mapping, @PathVariable(name = "processId") final Long processId) {
        final Runnable runnable = () -> {
            try {
                processStoreCaller.saveMapping(mapping, processId);
            } catch (final URISyntaxException e) {
                LOG.error(e.getMessage());
            }
        };
        runnable.run();
    }

    @RequestMapping(value ="api/store/processes/byOrga/{orgaId}", method = RequestMethod.GET)
    public @ResponseBody Callable<ResponseEntity<ProcessStoreDTO[]>> findProcessByUserId(
            //final HttpServletRequest request,
            @PathVariable(name = "orgaId") final Long orgaId) {
        return() -> {
            //final HttpHeaderUser headerUser = new HttpHeaderUser(request);
            return processStoreCaller.findAllProcessesByOrgaId(orgaId).get();
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



    private static class UploadProcessResponse implements Serializable {
        private static final long serialVersionUID = -431110151246364474L;

        public final String message;
        public final Boolean success;

        public UploadProcessResponse(final String message, final Boolean success) { this.message = message; this.success = success; }
    }
}
