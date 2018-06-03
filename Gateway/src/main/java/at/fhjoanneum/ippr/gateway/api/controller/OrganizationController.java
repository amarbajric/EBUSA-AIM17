package at.fhjoanneum.ippr.gateway.api.controller;

import at.fhjoanneum.ippr.gateway.api.services.OrganizationService;
import at.fhjoanneum.ippr.gateway.security.persistence.entities.OrganizationImpl;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.Organization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.concurrent.Callable;

@RestController
@RequestMapping(produces = "application/json; charset=UTF-8")
public class OrganizationController {

    @Autowired
    private OrganizationService organizationService;


    @RequestMapping(value = "api/organization/all", method = RequestMethod.GET)
    public @ResponseBody Callable<List<Organization>> getOrganizations() {
        return organizationService.getOrganizations()::get;
    }

    @RequestMapping(value = "api/organization/{oId}", method = RequestMethod.GET)
    public @ResponseBody Organization getOrganizationById(final HttpServletRequest request,
                                                          @PathVariable(name = "oId", required = true) final Long oId) {
        return organizationService.getOrganizationByOrganizationId(oId);
    }

/*    @RequestMapping(value = "api/organization", method = RequestMethod.POST)
    public @ResponseBody*/
}
