package at.fhjoanneum.ippr.gateway.security.persistence.objects;

public interface Organization {

    Long getOId();

    String getSystemId();

    String getOrganizationName();

    void setOrganizationName(String organizationName);

    String getDescription();

    void setOrganizationDescription(String organizationDescription);
}
