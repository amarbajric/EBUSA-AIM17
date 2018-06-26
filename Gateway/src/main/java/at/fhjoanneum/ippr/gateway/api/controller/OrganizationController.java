package at.fhjoanneum.ippr.gateway.api.controller;

import at.fhjoanneum.ippr.gateway.api.controller.user.HttpHeaderUser;
import at.fhjoanneum.ippr.gateway.api.services.OrganizationService;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.Organization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.Serializable;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping(produces = "application/json; charset=UTF-8")
public class OrganizationController {

    @Autowired
    private OrganizationService organizationService;


    @RequestMapping(value = "api/organization/all", method = RequestMethod.GET)
    public @ResponseBody
    Callable<List<Organization>> getOrganizations() {
        return organizationService.getOrganizations()::get;
    }

    @RequestMapping(value = "api/organization/{oId}", method = RequestMethod.GET)
    public @ResponseBody
    Organization getOrganizationById(final HttpServletRequest request,
                                     @PathVariable(name = "oId", required = true) final Long oId) {
        return organizationService.getOrganizationByOrganizationId(oId);
    }

    @RequestMapping(value = "api/organization", method = RequestMethod.POST)
    public @ResponseBody
    ResponseEntity<OrganizationResponse> saveOrganization(HttpServletRequest req, @RequestBody final SaveOrganization organization)
            throws ExecutionException, InterruptedException {

        HttpHeaderUser headerUser = new HttpHeaderUser(req);

        final Optional<Organization> organizationOpt =
                organizationService.saveOrganization(Long.parseLong(headerUser.getUserId()), organization.organizationName,
                        organization.organizationDescription);

        if (!organizationOpt.isPresent()) {
            return new ResponseEntity<>(new OrganizationResponse("Could not save organization. " +
                    "Check if one or more properties may be missing or if user is already part of an organization."),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(new OrganizationResponse("Ok"), HttpStatus.OK);
    }

    @RequestMapping(value = "api/organization/{oId}", method = RequestMethod.PUT)
    public ResponseEntity<UpdateResponse> updateOrganization(@RequestBody final OrganizationUpdate organization,
                                                     @PathVariable(name = "oId", required = true) final Long oId) {

        final Optional<Organization> updatedUser =
                organizationService.updateOrganization(oId, organization.organizationName,
                        organization.organizationDescription, organization.processes);

        return updatedUser.map(org1 -> new ResponseEntity<>(new UpdateResponse("Ok", org1), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(new UpdateResponse(String.format("Updating Organization with id %s failed.", oId), null),
                        HttpStatus.INTERNAL_SERVER_ERROR));

    }


    private static class SaveOrganization implements Serializable {
        private static final long serialVersionUID = -431110191246364389L;

        public String organizationName;
        public String organizationDescription;
    }

    private static class OrganizationResponse implements Serializable {
        private static final long serialVersionUID = -431110191246364495L;

        public final String message;

        public OrganizationResponse(final String message) { this.message = message; }
    }

    private static class OrganizationUpdate implements Serializable {
        private static final long serialVersionUID = -431110199246364751L;

        public String organizationName;
        public String organizationDescription;
        public List<Process> processes;
    }

    private static class UpdateResponse implements Serializable {
        private static final long serialVersionUID = -431110191276364999L;

        public final String message;
        public final Organization organization;

        public UpdateResponse(final String message, final Organization organization) {
            this.message = message;
            this.organization = organization; }
    }
}