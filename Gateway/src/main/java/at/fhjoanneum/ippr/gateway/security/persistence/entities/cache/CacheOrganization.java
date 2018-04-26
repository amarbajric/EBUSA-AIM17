package at.fhjoanneum.ippr.gateway.security.persistence.entities.cache;

public class CacheOrganization {

    private String organizationName;
    private String organizationDescription;
    private String systemId;

    public CacheOrganization(final String systemId, final String organizationName, final String organizationDescription){
        this.systemId = systemId;
        this.organizationName = organizationName;
        this.organizationDescription = organizationDescription;
    }

    public String getOrganizationName() {
        return organizationName;
    }

    public void setOrganizationName(String organizationName) {
        this.organizationName = organizationName;
    }

    public String getOrganizationDescription() {
        return organizationDescription;
    }

    public void setOrganizationDescription(String organizationDescription) {
        this.organizationDescription = organizationDescription;
    }

    public String getSystemId() {
        return systemId;
    }

    public void setSystemId(String systemId) {
        this.systemId = systemId;
    }
}
