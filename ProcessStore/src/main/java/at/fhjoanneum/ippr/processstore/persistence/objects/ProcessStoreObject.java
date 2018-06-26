package at.fhjoanneum.ippr.processstore.persistence.objects;

public interface ProcessStoreObject {

    Long getStoreId();

    String getProcessName();

    void setProcessName(String processName);

    Boolean isApproved();

}
