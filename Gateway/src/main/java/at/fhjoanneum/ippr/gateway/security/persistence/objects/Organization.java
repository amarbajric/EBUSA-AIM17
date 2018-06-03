package at.fhjoanneum.ippr.gateway.security.persistence.objects;

import at.fhjoanneum.ippr.gateway.security.persistence.entities.UserImpl;

import java.util.List;

public interface Organization {

    Long getOId();

    String getSystemId();

    String getOrganizationName();

    void setOrganizationName(String organizationName);

    String getDescription();

    void setOrganizationDescription(String organizationDescription);

    List<UserImpl> getEmployees();

    void setEmployees(List<UserImpl> employees);
}
